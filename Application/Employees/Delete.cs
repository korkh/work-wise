using Application.Core;
using MediatR;
using Storage;

namespace Application.Employees
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; } // from Domain
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
                var employee = await _context.Employees.FindAsync(request.Id);

                if (employee == null)
                    return null;

                _context.Remove(employee);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to delete employee");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
