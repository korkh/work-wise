using Application.Core;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.Documents
{
    public class DocumentEdit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public DocumentDto Document { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Document).SetValidator(new DocumentValidator());
                RuleFor(x => x.Document.Employee.Id)
                    .NotEmpty()
                    .WithMessage("Employee ID is required.");
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
                    e => e.Id == request.Document.Employee.Id,
                    cancellationToken
                );
                if (!employeeExists)
                {
                    _logger.LogWarning(
                        "Attempted to edit a document for a non-existent employee with ID: {EmployeeId}",
                        request.Document.Employee.Id
                    );
                    return Result<Unit>.Failure("Employee not found");
                }

                var documentToUpdate = await _context.Documents.FirstOrDefaultAsync(
                    d => d.Id == request.Document.Id,
                    cancellationToken
                );
                if (documentToUpdate == null)
                    return Result<Unit>.Failure("Document not found");

                bool titleExists = await _context.Documents.AnyAsync(
                    d => d.Title == request.Document.Title && d.Id != request.Document.Id,
                    cancellationToken
                );
                if (titleExists)
                    return Result<Unit>.Failure("A document with the same title already exists.");

                _mapper.Map(request.Document, documentToUpdate);
                _context.Documents.Update(documentToUpdate);
                try
                {
                    var result = await _context.SaveChangesAsync(cancellationToken) > 0;
                    if (!result)
                        return Result<Unit>.Failure("No changes were made.");
                    return Result<Unit>.Success(Unit.Value);
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    _logger.LogError(
                        ex,
                        "A concurrency update error occurred. The document has been modified by another user."
                    );
                    return Result<Unit>.Failure(
                        "A conflict occurred. The document has been modified by another user. Please reload the entity and try again."
                    );
                }
            }
        }
    }
}
