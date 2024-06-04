using Domain.Entities;

namespace Application.EmployeeTimeCards
{
    public class EmployeeTimeCardDto
    {
        public Guid Id { get; set; }
        public Guid EmployeeId { get; set; }
        public string EmployeeFirstName { get; set; }
        public string EmployeeLastName { get; set; }
        public string Month { get; set; }
        public int AvailableWorkingHoursPerMonth { get; set; }
        public ICollection<WorkingStateDto> WorkingStates { get; set; }
    }
}
