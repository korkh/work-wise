using Application.Contracts;
using Application.Core;
using Application.Documents;
using Application.Payrolls;
using Application.Validations;
using AutoMapper;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Storage;

namespace Application.Employees
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public EmployeeDto Employee { get; set; }
            public ContractDto Contract { get; set; }
            public List<DocumentDto> Documents { get; set; }
            public List<PayrollDto> Payrolls { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Employee).SetValidator(new EmployeeValidator());
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
                var employee = _mapper.Map<Employee>(request.Employee);
                employee.ContractData = _mapper.Map<Contract>(request.Contract);
                employee.Documents = _mapper.Map<List<Document>>(request.Documents);
                employee.Payrolls = _mapper.Map<List<Payroll>>(request.Payrolls);

                _context.Employees.Add(employee);
                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                    return Result<Unit>.Failure("Falied to create training");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
