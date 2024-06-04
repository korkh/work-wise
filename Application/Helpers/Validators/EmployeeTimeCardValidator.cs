using FluentValidation;

namespace Application.EmployeeTimeCards
{
    public class EmployeeTimeCardValidator : AbstractValidator<EmployeeTimeCardDto>
    {
        public EmployeeTimeCardValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
            RuleFor(x => x.EmployeeId).NotEmpty();
            RuleFor(x => x.Month)
                .NotEmpty()
                .Matches(@"^(0[1-9]|1[0-2])-[0-9]{4}$") // Ensures the month is in MM-YYYY format
                .WithMessage("Month must be in MM-YYYY format.");
            RuleFor(x => x.AvailableWorkingHoursPerMonth)
                .GreaterThan(0)
                .WithMessage("Available working hours per month must be greater than zero.");
            RuleForEach(x => x.WorkingStates).SetValidator(new WorkingStateValidator());
        }
    }

    public class WorkingStateValidator : AbstractValidator<WorkingStateDto>
    {
        public WorkingStateValidator()
        {
            RuleFor(x => x.Day)
                .InclusiveBetween(1, 31)
                .WithMessage("Day must be between 1 and 31.");
            RuleFor(x => x.State).NotEmpty();
        }
    }
}
