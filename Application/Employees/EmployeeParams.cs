using Application.Core;

namespace Application.Employees
{
    public class EmployeeParams : PagingParams
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsAvailable { get; set; }
        public bool IsFired { get; set; }
        public bool HasDocumentExpiringInTwoMonths { get; set; }
        public bool HasDocumentExpiringInThreeMonths { get; set; }
        public bool HasDocumentExpiringInSixMonths { get; set; }
        public string SortField { get; set; } = "lastname";
        public string Order { get; set; } = "asc";
        public string Search { get; set; }
    }
}
