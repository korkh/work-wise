using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.Documents
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<DocumentDto>>>
        {
            public DocumentParams Params { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Params).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<DocumentDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<PagedList<DocumentDto>>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var query = _context
                    .Documents.AsNoTracking()
                    .ProjectTo<DocumentDto>(_mapper.ConfigurationProvider)
                    .AsQueryable();

                // Filters for documents
                if (!string.IsNullOrEmpty(request.Params.Title))
                {
                    query = query.Where(d => d.Title.Contains(request.Params.Title));
                }

                if (!string.IsNullOrEmpty(request.Params.Lastname))
                {
                    query = query.Where(d => d.Employee.LastName.Contains(request.Params.Lastname));
                }

                if (request.Params.HasDocumentExpiringInTwoMonths)
                {
                    var warningDate = DateTime.UtcNow.AddMonths(2);
                    query = query.Where(d => d.ExpirationDate <= warningDate);
                }

                if (request.Params.HasDocumentExpiringInThreeMonths)
                {
                    var warningDate = DateTime.UtcNow.AddMonths(3);
                    query = query.Where(d => d.ExpirationDate <= warningDate);
                }

                if (request.Params.HasDocumentExpiringInSixMonths)
                {
                    var warningDate = DateTime.UtcNow.AddMonths(6);
                    query = query.Where(d => d.ExpirationDate <= warningDate);
                }

                var documents = await PagedList<DocumentDto>.CreateAsync(
                    query,
                    request.Params.PageNumber,
                    request.Params.PageSize
                );
                return Result<PagedList<DocumentDto>>.Success(documents);
            }
        }
    }
}
