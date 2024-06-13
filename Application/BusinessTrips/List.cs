using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.BusinessTrips
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<BusinessTripDto>>>
        {
            public BusinessTripParams Params { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Params).NotNull();
            }
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<BusinessTripDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<PagedList<BusinessTripDto>>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var query = _context
                    .BusinessTrips.AsNoTracking()
                    .ProjectTo<BusinessTripDto>(_mapper.ConfigurationProvider)
                    .AsQueryable();

                // Filters for business trips
                if (request.Params.EmployeeId.HasValue)
                {
                    query = query.Where(bt => bt.Employee.Id == request.Params.EmployeeId);
                }

                if (request.Params.StartDate.HasValue)
                {
                    query = query.Where(bt => bt.Laikotarpis >= request.Params.StartDate.Value);
                }

                if (request.Params.EndDate.HasValue)
                {
                    query = query.Where(bt => bt.Laikotarpis <= request.Params.EndDate.Value);
                }

                if (request.Params.MinAlga.HasValue)
                {
                    query = query.Where(bt => bt.Alga >= request.Params.MinAlga.Value);
                }

                if (request.Params.MaxAlga.HasValue)
                {
                    query = query.Where(bt => bt.Alga <= request.Params.MaxAlga.Value);
                }

                if (request.Params.MinDienpinigai.HasValue)
                {
                    query = query.Where(bt => bt.Dienpinigai >= request.Params.MinDienpinigai.Value);
                }

                if (request.Params.MaxDienpinigai.HasValue)
                {
                    query = query.Where(bt => bt.Dienpinigai <= request.Params.MaxDienpinigai.Value);
                }

                if (request.Params.MinLikutis.HasValue)
                {
                    query = query.Where(bt => bt.Likutis >= request.Params.MinLikutis.Value);
                }

                if (request.Params.MaxLikutis.HasValue)
                {
                    query = query.Where(bt => bt.Likutis <= request.Params.MaxLikutis.Value);
                }

                var businessTrips = await PagedList<BusinessTripDto>.CreateAsync(
                    query,
                    request.Params.PageNumber,
                    request.Params.PageSize
                );
                return Result<PagedList<BusinessTripDto>>.Success(businessTrips);
            }
        }
    }
}
