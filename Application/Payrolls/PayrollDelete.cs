using Application.Core;
using MediatR;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.Payrolls
{
    public class PayrollDelete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly ILogger<Handler> _logger;

            public Handler(DataContext context, ILogger<Handler> logger)
            {
                _context = context;
                _logger = logger;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var payroll = await _context.Payrolls.FindAsync(request.Id);

                if (payroll == null)
                {
                    _logger.LogWarning(
                        "Attempt to delete a non-existent payroll with ID: {PayrollId}",
                        request.Id
                    );
                    return Result<Unit>.Failure("Payroll not found");
                }

                _context.Payrolls.Remove(payroll);

                try
                {
                    var result = await _context.SaveChangesAsync(cancellationToken) > 0;
                    if (!result)
                        return Result<Unit>.Failure("Failed to delete payroll");

                    return Result<Unit>.Success(Unit.Value);
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Error deleting payroll with ID: {PayrollId}", request.Id);
                    return Result<Unit>.Failure("An error occurred while deleting the payroll");
                }
            }
        }
    }
}
