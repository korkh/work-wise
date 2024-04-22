namespace Application.Documents
{
    public class DocumentDto
    {
        public Guid Id { get; set; }
        public byte[] RowVersion { get; set; }
        public Guid EmployeeId { get; set; }
        public string Title { get; set; }
        public DateTime IssueDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public bool HasTwoMonthWarning => DateTime.UtcNow.AddMonths(2) >= ExpirationDate;
        public bool HasThreeMonthWarning => DateTime.UtcNow.AddMonths(3) >= ExpirationDate;
        public bool HasSixMonthWarning => DateTime.UtcNow.AddMonths(6) >= ExpirationDate;
    }
}
