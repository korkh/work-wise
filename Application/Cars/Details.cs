using Application.Core;
using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.Transports
{
    public class Details
    {
        public class Query : IRequest<Result<CarDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<CarDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<CarDto>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var car = await _context.Cars.FindAsync(request.Id);
                if (car == null)
                    return Result<CarDto>.Failure("Car not found");

                return Result<CarDto>.Success(_mapper.Map<CarDto>(car));
            }
        }
    }
}
