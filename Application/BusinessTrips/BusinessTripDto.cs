
using Domain.Entities;

namespace Application.BusinessTrips
{
    public class BusinessTripDto
    {
        public Guid Id { get; set; }
        public Guid EmployeeId { get; set; }
        public Employee Employee { get; set; }
        public DateOnly Laikotarpis { get; set; }
        public decimal Alga { get; set; }
        public decimal Dienpinigai { get; set; }
        public decimal Bankas { get; set; }
        public decimal Baudos { get; set; }
        public decimal Likutis { get; set; } // Likutis = Alga + Dienpinigai - Bankas - Baudos + FormerYearLikutis
    }
}

