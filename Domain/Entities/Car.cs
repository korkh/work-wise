namespace Domain.Entities
{
    public class Car
    {
        public Guid Id { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public string Transmission { get; set; }
        public string BuildYear { get; set; }
        public string FuelType { get; set; }
        public string CarPlateNumber { get; set; }
        public string Renter { get; set; }
    }
}
