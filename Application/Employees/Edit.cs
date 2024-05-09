using Application.Core;
using Application.Validations;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.Employees
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public EmployeeDto Employee { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Employee).SetValidator(new EmployeeValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly ILogger<Handler> _logger;

            public Handler(DataContext context, IMapper mapper, ILogger<Handler> logger)
            {
                _mapper = mapper;
                _context = context;
                _logger = logger;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var Employee = await _context.Employees.FindAsync(request.Employee.Id);

                _mapper.Map(request.Employee, Employee);

                try
                {
                    var result = await _context.SaveChangesAsync() > 0;

                    if (!result)
                        return Result<Unit>.Failure("Failed to update Employee");

                    return Result<Unit>.Success(Unit.Value);
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    _logger.LogError(ex, "A concurrency update error occurred on employee edit.");
                    return Result<Unit>.Failure(
                        "A conflict occurred. Please reload the entity and try again."
                    );
                }
                catch (DbUpdateException ex)
                {
                    _logger.LogError(ex, "Failed to update employee due to a database error.");
                    return Result<Unit>.Failure(
                        "Failed to update employee. Database error encountered."
                    );
                }
            }
        }
    }
}
