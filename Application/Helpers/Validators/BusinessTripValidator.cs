using Application.BusinessTrips;
using FluentValidation;

namespace Application.Helpers.Validators
{
    public class BusinessTripValidator : AbstractValidator<BusinessTripDto>
    {
        public BusinessTripValidator()
        {
            RuleFor(b => b.Laikotarpis)
                .NotEmpty().WithMessage("Laikotarpis is required.");

            RuleFor(b => b.Alga)
                .GreaterThanOrEqualTo(0).WithMessage("Alga must be greater than or equal to 0.");

            RuleFor(b => b.Dienpinigai)
                .GreaterThanOrEqualTo(0).WithMessage("Dienpinigai must be greater than or equal to 0.");

            RuleFor(b => b.Bankas)
                .GreaterThanOrEqualTo(0).WithMessage("Bankas must be greater than or equal to 0.");

            RuleFor(b => b.Baudos)
                .GreaterThanOrEqualTo(0).WithMessage("Baudos must be greater than or equal to 0.");

            RuleFor(b => b.Likutis)
                .GreaterThanOrEqualTo(0).WithMessage("Likutis must be greater than or equal to 0.");
        }
    }
}