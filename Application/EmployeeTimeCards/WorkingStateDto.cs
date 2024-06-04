using Domain.Entities;

namespace Application.EmployeeTimeCards
{
    public class WorkingStateDto
    {

        public int Id { get; set; }
        public int Day { get; set; }
        public string State { get; set; }
        public bool Holiday { get; set; }
    }
}