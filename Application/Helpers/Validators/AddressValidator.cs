using Application.Addresses;
using FluentValidation;

public class AddressValidator : AbstractValidator<AddressDto>
{
    public AddressValidator()
    {
        RuleFor(x => x.Address1).NotEmpty().WithMessage("Address line is required.");
        RuleFor(x => x.City).NotEmpty().WithMessage("City is required.");
        RuleFor(x => x.Country).NotEmpty().WithMessage("Country is required.");
        RuleFor(x => x.Zip)
            .NotEmpty()
            .WithMessage("Zip code is required.");
    }
}
