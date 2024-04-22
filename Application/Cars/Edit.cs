using Application.Core;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.Transports
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public CarDto Car { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Car).NotNull();
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var car = await _context.Cars.FindAsync(request.Car.Id);
                if (car == null)
                    return Result<Unit>.Failure("Car not found");

                _mapper.Map(request.Car, car);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to update car");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
