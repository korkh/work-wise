using Application.Core;

namespace Application.Payrolls
{
    public class PayrollParams : PagingParams
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public int WorkingDays { get; set; }
        public int WorkingHours { get; set; }
    }
}
