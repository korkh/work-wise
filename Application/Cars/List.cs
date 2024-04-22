using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Storage;

namespace Application.Transports
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<CarDto>>>
        {
            public CarParams Params { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<CarDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<PagedList<CarDto>>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var query = _context.Cars.AsQueryable();

                if (!string.IsNullOrEmpty(request.Params.Manufacturer))
                    query = query.Where(c => c.Manufacturer == request.Params.Manufacturer);

                if (!string.IsNullOrEmpty(request.Params.Model))
                    query = query.Where(c => c.Model == request.Params.Model);

                if (!string.IsNullOrEmpty(request.Params.Year))
                    query = query.Where(c => c.BuildYear == request.Params.Year);

                if (!string.IsNullOrEmpty(request.Params.FuelType))
                    query = query.Where(c => c.FuelType == request.Params.FuelType);

                var cars = await PagedList<CarDto>.CreateAsync(
                    query.ProjectTo<CarDto>(_mapper.ConfigurationProvider),
                    request.Params.PageNumber,
                    request.Params.PageSize
                );

                return Result<PagedList<CarDto>>.Success(cars);
            }
        }
    }
}
