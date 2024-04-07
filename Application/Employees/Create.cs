using Application.Core;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.Employees
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Employee Employee { get; set; }
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
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var user = await _context.Users.FirstOrDefaultAsync(x =>
                    x.UserName == _userAccessor.GetUserName()
                );

                var employee = new Employee
                {
                    FirstName = request.Employee.FirstName,
                    LastName = request.Employee.LastName,
                    BirthDate = request.Employee.BirthDate,
                    RegistrationAddress = request.Employee.RegistrationAddress,
                    PhoneNumber = request.Employee.PhoneNumber,
                    ContractData = request.Employee.ContractData,
                    Documents = request.Employee.Documents
                };

                _context.Employees.Add(employee);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Result<Unit>.Failure("Falied to create training");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
