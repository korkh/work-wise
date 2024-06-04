using Application.Addresses;
using Application.Contracts;
using Application.Documents;
using Application.EmployeeTimeCards;
using Application.Payrolls;
using Application.Transports;

namespace Application.Employees
{
    public class EmployeeDto
    {
        public Guid Id { get; set; }
        public string Avatar { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDay { get; set; }
        public AddressDto RegistrationAddress { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public bool IsAvailable { get; set; }
        public bool IsFired { get; set; }
        public TransportInfoDto TransportInfo { get; set; }
        public ContractDto ContractData { get; set; }
        public ICollection<DocumentDto> Documents { get; set; }
        public ICollection<PayrollDto> Payrolls { get; set; }
        public ICollection<EmployeeTimeCardDto> EmployeeTimeCards { get; set; }

        public void FilterSensitiveData(bool canViewSensitiveData)
        {
            if (!canViewSensitiveData)
            {
                Payrolls = new List<PayrollDto>();
                Documents = new List<DocumentDto>();
                EmployeeTimeCards = new List<EmployeeTimeCardDto>();
            }
        }
    }
}
