using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.Transports
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var car = await _context.Cars.FindAsync(request.Id);
                if (car == null)
                    return Result<Unit>.Failure("Car not found");

                _context.Cars.Remove(car);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to delete car");
                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
