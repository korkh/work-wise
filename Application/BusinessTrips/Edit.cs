using Application.Core;
using Application.Helpers.Validators;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.BusinessTrips
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public BusinessTripDto BusinessTrip { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.BusinessTrip).SetValidator(new BusinessTripValidator());
                RuleFor(x => x.BusinessTrip.Id)
                    .NotEmpty()
                    .WithMessage("Business Trip ID is required.");
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly ILogger<Handler> _logger;

            public Handler(DataContext context, IMapper mapper, ILogger<Handler> logger)
            {
                _context = context;
                _mapper = mapper;
                _logger = logger;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var employeeExists = await _context.Employees.AnyAsync(
                    e => e.Id == request.BusinessTrip.EmployeeId,
                    cancellationToken
                );
                if (!employeeExists)
                {
                    _logger.LogWarning(
                        "Attempted to edit a business trip for a non-existent employee with ID: {EmployeeId}",
                        request.BusinessTrip.EmployeeId
                    );
                    return Result<Unit>.Failure("Employee not found");
                }

                var businessTripToUpdate = await _context.BusinessTrips.FirstOrDefaultAsync(
                    bt => bt.Id == request.BusinessTrip.Id,
                    cancellationToken
                );
                if (businessTripToUpdate == null)
                {
                    _logger.LogWarning(
                        "Attempted to edit a non-existent business trip with ID: {BusinessTripId}",
                        request.BusinessTrip.Id
                    );
                    return Result<Unit>.Failure("Business trip not found");
                }

                _mapper.Map(request.BusinessTrip, businessTripToUpdate);

                // Ensure the Employee entity is not updated
                _context.Entry(businessTripToUpdate).Reference(bt => bt.Employee).IsModified = false;

                try
                {
                    var result = await _context.SaveChangesAsync(cancellationToken) > 0;
                    if (!result)
                    {
                        _logger.LogInformation("No changes were made to the business trip with ID: {BusinessTripId}", request.BusinessTrip.Id);
                        return Result<Unit>.Failure("No changes were made.");
                    }
                    return Result<Unit>.Success(Unit.Value);
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    _logger.LogError(
                        ex,
                        "A concurrency update error occurred. The business trip has been modified by another user."
                    );
                    return Result<Unit>.Failure(
                        "A conflict occurred. The business trip has been modified by another user. Please reload the entity and try again."
                    );
                }
            }
        }
    }
}
