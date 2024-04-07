namespace Domain
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public Address RegistrationAddress { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsAvailable { get; set; }
        public bool IsFired { get; set; }
        public Contract ContractData { get; set; }
        public ICollection<Document> Documents { get; set; } = [];
    }
}
