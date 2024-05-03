using Application.Core;
using Application.Helpers;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.Payrolls
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PayrollDto Payroll { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Payroll).SetValidator(new PayrollValidator());
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
                var payrollToUpdate = await _context
                    .Payrolls.Include(p => p.Employee)
                    .FirstOrDefaultAsync(p => p.Id == request.Payroll.Id, cancellationToken);

                if (payrollToUpdate == null)
                {
                    return Result<Unit>.Failure("Payroll not found");
                }

                bool payrollExists = await PayrollHelper.PayrollExistsAsync(
                    _context,
                    request.Payroll,
                    payrollToUpdate.Id,
                    cancellationToken
                );

                if (payrollExists)
                {
                    return Result<Unit>.Failure(
                        "A payroll record with the same data already exists for this employee."
                    );
                }

                _mapper.Map(request.Payroll, payrollToUpdate);

                try
                {
                    var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                    if (!result)
                    {
                        return Result<Unit>.Failure("No changes were made.");
                    }

                    return Result<Unit>.Success(Unit.Value);
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    _logger.LogError(ex, "A concurrency update error occurred on payroll edit.");
                    return Result<Unit>.Failure(
                        "A conflict occurred. Please reload the entity and try again."
                    );
                }
                catch (DbUpdateException ex)
                {
                    _logger.LogError(ex, "Failed to update payroll due to a database error.");
                    return Result<Unit>.Failure(
                        "Failed to update payroll. Database error encountered."
                    );
                }
            }
        }
    }
}
