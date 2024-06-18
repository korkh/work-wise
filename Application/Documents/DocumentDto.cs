using Domain.Entities;

namespace Application.Documents
{
    public class DocumentDto
    {
        public Guid Id { get; set; }
        public Employee Employee { get; set; }
        public Guid EmployeeId { get; set; }
        public string Title { get; set; }
        private DateTime issueDate;
        public DateTime IssueDate
        {
            get => issueDate;
            set => issueDate = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }
        private DateTime expirationDate;
        public DateTime ExpirationDate
        {
            get => expirationDate;
            set => expirationDate = DateTime.SpecifyKind(value, DateTimeKind.Utc);
        }
        public bool HasTwoMonthWarning => DateTime.UtcNow.AddMonths(2) >= ExpirationDate;
        public bool HasThreeMonthWarning => DateTime.UtcNow.AddMonths(3) >= ExpirationDate;
        public bool HasSixMonthWarning => DateTime.UtcNow.AddMonths(6) >= ExpirationDate;
    }
}
