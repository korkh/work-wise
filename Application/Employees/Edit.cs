using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Storage;

namespace Application.Employees
{
    public class Edit
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
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(
                Command request,
                CancellationToken cancellationToken
            )
            {
                var Employee = await _context.Employees.FindAsync(request.Employee.Id);

                // Training.Title = request.Training.Title ?? Training.Title;
                //instead of type each property we will use AutoMapper.Extension from NuGet to map all

                _mapper.Map(request.Employee, Employee);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Result<Unit>.Failure("Failed to update Training");

                return Result<Unit>.Success(Unit.Value); //Notofocation to API that work has completed
            }
        }
    }
}
