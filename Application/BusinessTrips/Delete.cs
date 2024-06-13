using Application.Core;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.BusinessTrips
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Id).NotEmpty().WithMessage("Business trip ID is required.");
            }
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
                var bTrip = await _context.BusinessTrips.FindAsync(request.Id);

                if (bTrip == null)
                {
                    _logger.LogWarning(
                        "Attempt to delete a non-existent business trip with ID: {BusinessTripId}",
                        request.Id
                    );
                    return Result<Unit>.Failure("Business trip not found");
                }

                _context.BusinessTrips.Remove(bTrip);

                try
                {
                    var result = await _context.SaveChangesAsync(cancellationToken) > 0;
                    if (!result)
                    {
                        return Result<Unit>.Failure("Failed to delete the business trip");
                    }
                    return Result<Unit>.Success(Unit.Value);
                }
                catch (DbUpdateException ex)
                {
                    _logger.LogError(
                        ex,
                        "Error deleting business trip with ID: {BusinessTripId}",
                        request.Id
                    );
                    return Result<Unit>.Failure("An error occurred while deleting the business trip");
                }
            }
        }
    }
}
