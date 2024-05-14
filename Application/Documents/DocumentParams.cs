using Application.Core;

namespace Application.Documents
{
    public class DocumentParams : PagingParams
    {
        public string EmployeeId { get; set; }
        public string Lastname { get; set; }
        public string Title { get; set; }
        public bool HasDocumentExpiringInTwoMonths { get; set; }
        public bool HasDocumentExpiringInThreeMonths { get; set; }
        public bool HasDocumentExpiringInSixMonths { get; set; }
    }
}
