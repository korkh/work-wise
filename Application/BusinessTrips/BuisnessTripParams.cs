using Application.Core;

namespace Application.BusinessTrips
{
    public class BusinessTripParams : PagingParams
    {
        public Guid? EmployeeId { get; set; }
        public DateOnly? StartDate { get; set; }
        public DateOnly? EndDate { get; set; }
        public decimal? MinAlga { get; set; }
        public decimal? MaxAlga { get; set; }
        public decimal? MinDienpinigai { get; set; }
        public decimal? MaxDienpinigai { get; set; }
        public decimal? MinLikutis { get; set; }
        public decimal? MaxLikutis { get; set; }
    }
}
