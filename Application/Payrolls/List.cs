using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Storage;

namespace Application.Payrolls
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<PayrollDto>>>
        {
            public PayrollParams Params { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<PayrollDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<PagedList<PayrollDto>>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var query = _context
                    .Payrolls.Where(p =>
                        (request.Params.Year == 0 || p.Year == request.Params.Year)
                        && (request.Params.Month == 0 || p.Month == request.Params.Month)
                        && (
                            request.Params.WorkingDays == 0
                            || p.WorkingDays == request.Params.WorkingDays
                        )
                        && (
                            request.Params.WorkingHours == 0
                            || p.WorkingHours == request.Params.WorkingHours
                        )
                    )
                    .ProjectTo<PayrollDto>(_mapper.ConfigurationProvider)
                    .AsQueryable();

                return Result<PagedList<PayrollDto>>.Success(
                    await PagedList<PayrollDto>.CreateAsync(
                        query,
                        request.Params.PageNumber,
                        request.Params.PageSize
                    )
                );
            }
        }
    }
}
