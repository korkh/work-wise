using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.EmployeeTimeCards
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

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var employeeTimeCard = await _context.EmployeeTimeCards
                    .Include(e => e.WorkingStates)
                    .FirstOrDefaultAsync(e => e.Id == request.Id);

                if (employeeTimeCard == null) return Result<Unit>.Failure("Employee time card not found");

                _context.EmployeeTimeCards.Remove(employeeTimeCard);

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result) return Result<Unit>.Failure("Failed to delete employee time card");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
