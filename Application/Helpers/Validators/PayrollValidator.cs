using Domain;
using FluentValidation;

namespace Application.Payrolls
{
    public class PayrollValidator : AbstractValidator<PayrollDto>
    {
        public PayrollValidator()
        {
            RuleFor(x => x.Year)
                .NotEmpty()
                .InclusiveBetween(1900, 2100)
                .WithMessage("Year must be between 1900 and 2100.");

            RuleFor(x => x.Month)
                .NotEmpty()
                .InclusiveBetween(1, 12)
                .WithMessage("Month must be between 1 and 12.");

            RuleFor(x => x.WorkingDays)
                .NotEmpty()
                .InclusiveBetween(0, 31)
                .WithMessage("Working days must be between 0 and 31.");

            RuleFor(x => x.WorkingHours)
                .NotEmpty()
                .InclusiveBetween(0, 744)
                .WithMessage("Working hours must be between 0 and 744.");

            RuleFor(x => x.AtlyginimasPagalDS)
                .NotEmpty()
                .GreaterThan(0)
                .WithMessage("Salary according to DS must be positive.");

            RuleFor(x => x.DarboDienu)
                .NotEmpty()
                .InclusiveBetween(0, 31)
                .WithMessage("Worked days must be between 0 and 31.");

            RuleFor(x => x.DarboValandu)
                .NotEmpty()
                .InclusiveBetween(0, 744)
                .WithMessage("Worked hours must be between 0 and 744.");

            RuleFor(x => x.Virsvalandziai)
                .GreaterThanOrEqualTo(0)
                .WithMessage("Overtime hours must not be negative.");

            RuleFor(x => x.SventinesIrPoilsioValandos)
                .GreaterThanOrEqualTo(0)
                .WithMessage("Holiday and rest hours must not be negative.");

            RuleFor(x => x.PirmaEilesPareigosTaikomasNPD)
                .GreaterThanOrEqualTo(0)
                .WithMessage("First rank duty NPD must not be negative.");

            RuleFor(x => x.NPD).GreaterThanOrEqualTo(0).WithMessage("NPD must not be negative.");

            ValidateDecimalProperties("Values must not be negative.");
        }

        private void ValidateDecimalProperties(string message)
        {
            RuleForEach(x =>
                    new[]
                    {
                        x.Atlyginimas,
                        x.Atostogos,
                        x.VirsvalandziaiPriskaityta,
                        x.Priedas,
                        x.PriedasUzPoilsioIrSventines,
                        x.Liga2d,
                        x.IsVisoPriskaityta,
                        x.PajamuMokestis20,
                        x.PajamuMokestis15,
                        x.PajamuMokestisOlandija,
                        x.Sodra_19,
                        x.Sodra_3,
                        x.IsVisoIsskaityta,
                        x.Ismoketi,
                        x.Bankas,
                        x.Baudos,
                        x.Likutis,
                        x.Sodra_1,
                        x.SodraIsViso,
                        x.AdditionalCalculation,
                        x.KiekTuriGauti
                    }
                )
                .NotEmpty()
                .WithMessage(message);
        }
    }
}
