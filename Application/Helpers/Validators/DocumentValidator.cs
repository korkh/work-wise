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
                .GreaterThan(d => d.IssueDate)
                .WithMessage("Expiration date must be after the issue date.");

            RuleFor(document => document.ExpirationDate)
                .Must((doc, expirationDate) => expirationDate > DateTime.UtcNow.AddMonths(2))
                .When(doc => doc.HasTwoMonthWarning)
                .WithMessage(
                    "Expiration date should be at least two months in the future when 'HasTwoMonthWarning' is true."
                );

            RuleFor(document => document.ExpirationDate)
                .Must((doc, expirationDate) => expirationDate > DateTime.UtcNow.AddMonths(3))
                .When(doc => doc.HasThreeMonthWarning)
                .WithMessage(
                    "Expiration date should be at least three months in the future when 'HasThreeMonthWarning' is true."
                );

            RuleFor(document => document.ExpirationDate)
                .Must((doc, expirationDate) => expirationDate > DateTime.UtcNow.AddMonths(6))
                .When(doc => doc.HasSixMonthWarning)
                .WithMessage(
                    "Expiration date should be at least six months in the future when 'HasSixMonthWarning' is true."
                );
        }
    }
}
