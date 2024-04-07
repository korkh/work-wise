using Domain;

namespace Application.Employees
{
    public class EmployeeDto
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string RegistrationAddress { get; set; }
        public string PhoneNumber { get; set; }
        public Contract ContractData { get; set; }
        public ICollection<Document> Documents { get; set; } = [];
    }
}
