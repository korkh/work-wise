using Application.Transports;
using FluentValidation;

namespace Application.Validations
{
    public class TransportInfoValidator : AbstractValidator<TransportInfoDto>
    {
        public TransportInfoValidator()
        {
            RuleFor(x => x.DrivingLicenseNumber)
                .NotEmpty()
                .WithMessage("Driving license number is required.")
                .Length(5, 20)
                .WithMessage("Driving license number must be between 5 and 20 characters.");

            RuleFor(x => x.E_100_CardNumber)
                .NotEmpty()
                .WithMessage("E-100 card number is required.")
                .Matches(@"^[a-zA-Z0-9]*$")
                .WithMessage("E-100 card number must be alphanumeric.");

            RuleForEach(x => x.Cars).SetValidator(new CarValidator());

            RuleFor(x => x.ExpectedKmPerDay)
                .GreaterThanOrEqualTo(0)
                .WithMessage("Expected kilometers per day must be zero or more.");
        }
    }
}
