using Application.Transports;
using FluentValidation;

namespace Application.Validations
{
    public class CarValidator : AbstractValidator<CarDto>
    {
        public CarValidator()
        {
            RuleFor(x => x.Manufacturer)
                .NotEmpty()
                .WithMessage("Manufacturer is required.")
                .MaximumLength(50)
                .WithMessage("Manufacturer name must not exceed 50 characters.");

            RuleFor(x => x.Model)
                .NotEmpty()
                .WithMessage("Model is required.")
                .MaximumLength(50)
                .WithMessage("Model name must not exceed 50 characters.");

            RuleFor(x => x.Transmission)
                .NotEmpty()
                .WithMessage("Transmission is required.")
                .Must(x => x == "Automatic" || x == "Manual")
                .WithMessage("Transmission must be either 'Automatic' or 'Manual'.");

            RuleFor(x => x.BuildYear)
                .NotEmpty()
                .WithMessage("Build year is required.")
                .Matches(@"^\d{4}$")
                .WithMessage("Build year must be a four-digit number.");

            RuleFor(x => x.FuelType)
                .NotEmpty()
                .WithMessage("Fuel type is required.")
                .Must(x => x == "Petrol" || x == "Diesel" || x == "Electric" || x == "Hybrid")
                .WithMessage("Fuel type must be 'Petrol', 'Diesel', 'Electric', or 'Hybrid'.");

            RuleFor(x => x.CarPlateNumber)
                .NotEmpty()
                .WithMessage("Car plate number is required.")
                .Matches(@"^[A-Z0-9]{2,10}$")
                .WithMessage("Car plate number must be between 2 and 10 alphanumeric characters.");

            RuleFor(x => x.Renter)
                .NotEmpty()
                .WithMessage("Renter information is required.")
                .MaximumLength(100)
                .WithMessage("Renter name must not exceed 100 characters.");
        }
    }
}
