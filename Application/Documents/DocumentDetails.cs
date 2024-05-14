using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.Documents
{
    public class DocumentDetails
    {
        public class Query : IRequest<Result<DocumentDto>>
        {
            public Guid Id { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Id).NotEmpty().WithMessage("Document ID is required.");
            }
        }

        public class Handler : IRequestHandler<Query, Result<DocumentDto>>
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

            public async Task<Result<DocumentDto>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var document = await _context
                    .Documents.AsNoTracking()
                    .ProjectTo<DocumentDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(d => d.Id == request.Id, cancellationToken);

                if (document == null)
                {
                    _logger.LogError("Document not found with ID: {DocumentId}", request.Id);
                    return Result<DocumentDto>.Failure("Document not found");
                }

                return Result<DocumentDto>.Success(document);
            }
        }
    }
}
