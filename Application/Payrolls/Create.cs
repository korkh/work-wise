using Application.Core;
using Application.Validations;
using AutoMapper;
using Domain;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.Payrolls
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PayrollDto Payroll { get; set; }
            public Guid EmployeeId { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Payroll).SetValidator(new PayrollValidator());
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
                var employee = await _context.Employees.FindAsync(request.EmployeeId);
                if (employee == null)
                {
                    return Result<Unit>.Failure("Employee not found");
                }

                bool payrollExists = await _context.Payrolls.AnyAsync(
                    p =>
                        p.EmployeeId == request.EmployeeId
                        && p.Year == request.Payroll.Year
                        && p.Month == request.Payroll.Month,
                    cancellationToken
                );

                if (payrollExists)
                {
                    return Result<Unit>.Failure(
                        "A payroll record for this period already exists for this employee."
                    );
                }

                var payroll = _mapper.Map<Payroll>(request.Payroll);
                payroll.EmployeeId = request.EmployeeId;

                _context.Payrolls.Add(payroll);
                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result)
                {
                    return Result<Unit>.Failure("Failed to create payroll");
                }

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
