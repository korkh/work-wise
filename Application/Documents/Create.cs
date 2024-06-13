using Application.Core;
using AutoMapper;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.Documents
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public DocumentDto Document { get; set; }
            public Guid EmployeeId { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Document).SetValidator(new DocumentValidator());

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
                // Check if the Employee exists
                var employee = await _context.Employees.FindAsync(request.EmployeeId);
                if (employee == null)
                {
                    _logger.LogWarning(
                        "Attempted to create a document for a non-existent employee with ID: {EmployeeId}",
                        request.EmployeeId
                    );
                    return Result<Unit>.Failure("Employee not found.");
                }

                // Map the DTO to a new Document object
                var document = _mapper.Map<Document>(request.Document);
                document.Employee.Id = request.EmployeeId;

                _context.Documents.Add(document);
                try
                {
                    var result = await _context.SaveChangesAsync(cancellationToken) > 0;
                    if (!result)
                    {
                        return Result<Unit>.Failure("Failed to create the document.");
                    }

                    return Result<Unit>.Success(Unit.Value);
                }
                catch (DbUpdateException ex)
                {
                    _logger.LogError(ex, "Failed to add a new document.");
                    return Result<Unit>.Failure("An error occurred while saving the document.");
                }
            }
        }
    }
}
