using Application.Core;
using AutoMapper;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.EmployeeTimeCards
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public EmployeeTimeCardDto EmployeeTimeCardDto { get; set; }
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

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var employee = await _context.Employees
                    .Include(e => e.EmployeeTimeCards)
                    .FirstOrDefaultAsync(e => e.Id == request.EmployeeTimeCardDto.EmployeeId);

                if (employee == null)
                {
                    return Result<Unit>.Failure("Employee not found");
                }

                var employeeTimeCard = _mapper.Map<EmployeeTimeCard>(request.EmployeeTimeCardDto);

                employee.EmployeeTimeCards.Add(employeeTimeCard);

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to create employee time card");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }



}
