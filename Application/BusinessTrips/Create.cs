using Application.BusinessTrips;
using Application.Core;
using Application.Helpers.Validators;
using AutoMapper;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.BusinessTrips
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public BusinessTripDto BTrip { get; set; }
            public Guid EmployeeId { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.BTrip).SetValidator(new BusinessTripValidator());
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

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                // Check if the employee exists
                var employee = await _context.Employees.FindAsync(request.BTrip.EmployeeId);
                if (employee == null)
                {
                    return Result<Unit>.Failure("Employee not found.");
                }

                // Check for duplicate business trips
                var existingBusinessTrip = await _context.BusinessTrips
                    .FirstOrDefaultAsync(bt =>
                        bt.Laikotarpis == request.BTrip.Laikotarpis &&
                        bt.Employee.Id == request.BTrip.EmployeeId,
                        cancellationToken);

                if (existingBusinessTrip != null)
                {
                    return Result<Unit>.Failure("A business trip for this date already exists for the employee.");
                }

                // Map and create the business trip
                var bTrip = _mapper.Map<BusinessTrip>(request.BTrip);
                _context.BusinessTrips.Add(bTrip);

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to create business trip");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
