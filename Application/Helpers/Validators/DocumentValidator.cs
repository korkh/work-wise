using System;
using FluentValidation;

namespace Application.Documents
{
    public class DocumentValidator : AbstractValidator<DocumentDto>
    {
        public DocumentValidator()
        {
            RuleFor(document => document.Title)
                .NotEmpty()
                .WithMessage("Title is required.")
                .Length(1, 250)
                .WithMessage("Title must be between 1 and 250 characters.");

            RuleFor(document => document.IssueDate)
                .LessThan(DateTime.UtcNow)
                .WithMessage("Issue date must be in the past.");

            RuleFor(document => document.ExpirationDate)
                .NotEmpty()
                .WithMessage("Expiration date must be after the issue date.");
        }
    }
}
