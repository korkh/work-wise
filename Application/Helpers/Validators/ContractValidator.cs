using System;
using Application.Contracts;
using FluentValidation;

namespace Application.Validations
{
    public class ContractValidator : AbstractValidator<ContractDto>
    {
        public ContractValidator()
        {
            RuleFor(x => x.Position).NotEmpty().WithMessage("The position must be specified.");

            RuleFor(x => x.ContractNumber)
                .NotEmpty()
                .WithMessage("Contract number cannot be empty.");

            RuleFor(x => x.AcceptionDate)
                .LessThan(x => x.DismissalDate)
                .WithMessage("The acception date must be earlier than the dismissal date.");

            RuleFor(x => x.DismissalDate)
                .GreaterThan(x => x.AcceptionDate)
                .WithMessage("The dismissal date must be later than the acception date.");

            RuleFor(x => x.AnnualHolidays)
                .InclusiveBetween(0, 365)
                .WithMessage("Annual holidays must be between 0 and 365.");

            RuleFor(x => x.FatherHolidays)
                .InclusiveBetween(0, 365)
                .WithMessage("Father holidays must be between 0 and 365.");

            RuleFor(x => x.UnpaidHolidays)
                .InclusiveBetween(0, 365)
                .WithMessage("Unpaid holidays must be between 0 and 365.");

            RuleFor(x => x.TruancyDays)
                .InclusiveBetween(0, 365)
                .WithMessage("Truancy days must be between 0 and 365.");

            RuleFor(x => x.AllowedAbsenceDays)
                .InclusiveBetween(0, 365)
                .WithMessage("Allowed absence days must be between 0 and 365.");

            RuleFor(x => x.UnusedHolidays)
                .GreaterThanOrEqualTo(0)
                .WithMessage(
                    "Unused holidays cannot be negative. Please check the input values for errors."
                );
        }
    }
}
