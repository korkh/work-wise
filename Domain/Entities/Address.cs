namespace Domain.Entities
{
    public class Address
    {
        public Guid Id { get; set; }
        public string Address1 { get; set; }
        public string City { get; set; }
        public string Zip { get; set; }
        public string Country { get; set; }
    }
}
