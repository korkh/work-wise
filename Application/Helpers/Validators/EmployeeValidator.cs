using System;
using Application.Documents;
using Application.Employees;
using FluentValidation;

namespace Application.Validations
{
    public class EmployeeValidator : AbstractValidator<EmployeeDto>
    {
        public EmployeeValidator()
        {
            RuleFor(x => x.FirstName)
                .NotEmpty()
                .WithMessage("First name is required.")
                .Length(1, 100)
                .WithMessage("First name must be between 1 and 100 characters.");

            RuleFor(x => x.LastName)
                .NotEmpty()
                .WithMessage("Last name is required.")
                .Length(1, 100)
                .WithMessage("Last name must be between 1 and 100 characters.");

            RuleFor(x => x.Email)
                .NotEmpty()
                .WithMessage("Email is required.")
                .EmailAddress()
                .WithMessage("A valid email is required.");

            RuleFor(x => x.PhoneNumber)
                .NotEmpty()
                .WithMessage("Phone number is required.")
                .Matches(@"^\+?[1-9]\d{1,14}$")
                .WithMessage("Phone number must be in valid international format.");

            RuleFor(x => x.BirthDate)
                .NotEmpty()
                .WithMessage("Birth date is required.")
                .LessThan(DateTime.Now.AddYears(-18))
                .WithMessage("Employee must be at least 18 years old.")
                .GreaterThan(DateTime.Now.AddYears(-100))
                .WithMessage("Birth date is not valid.");

            RuleFor(x => x.RegistrationAddress).SetValidator(new AddressValidator());
            RuleForEach(x => x.Documents).SetValidator(new DocumentValidator());

            RuleFor(x => x.TransportInfo).SetValidator(new TransportInfoValidator());
            RuleFor(x => x.ContractData).SetValidator(new ContractValidator());
        }
    }
}
