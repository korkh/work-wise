using Application.Core;
using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.EmployeeTimeCards
{
    public class List
    {
        public class Query : IRequest<Result<List<EmployeeTimeCardDto>>>
        {
            public EmployeeTimeCardDto EmployeeTimeCard { get; set; }
            public Guid EmployeeId { get; set; }
        }
        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.EmployeeTimeCard).SetValidator(new EmployeeTimeCardValidator());
            }
        }

        public class Handler : IRequestHandler<Query, Result<List<EmployeeTimeCardDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<List<EmployeeTimeCardDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var employeeTimeCards = await _context.EmployeeTimeCards
                .Include(e => e.Employee)
                .Include(e => e.WorkingStates)
                .ToListAsync();
                var employeeTimeCardsDto = _mapper.Map<List<EmployeeTimeCardDto>>(employeeTimeCards);
                return Result<List<EmployeeTimeCardDto>>.Success(employeeTimeCardsDto);
            }
        }
    }
}
