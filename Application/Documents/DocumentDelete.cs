using Application.Core;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.Documents
{
    public class DocumentDelete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Id).NotEmpty().WithMessage("Document ID is required.");
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
                var document = await _context.Documents.FindAsync(request.Id);

                if (document == null)
                {
                    _logger.LogWarning(
                        "Attempt to delete a non-existent document with ID: {DocumentId}",
                        request.Id
                    );
                    return Result<Unit>.Failure("Document not found");
                }

                _context.Documents.Remove(document);

                try
                {
                    var result = await _context.SaveChangesAsync(cancellationToken) > 0;
                    if (!result)
                    {
                        return Result<Unit>.Failure("Failed to delete the document");
                    }
                    return Result<Unit>.Success(Unit.Value);
                }
                catch (DbUpdateException ex)
                {
                    _logger.LogError(
                        ex,
                        "Error deleting document with ID: {DocumentId}",
                        request.Id
                    );
                    return Result<Unit>.Failure("An error occurred while deleting the document");
                }
            }
        }
    }
}
