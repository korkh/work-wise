namespace Domain.Entities
{
    public class TransportInfo
    {
        public string DrivingLicenseNumber { get; set; }
        public string E_100_CardNumber { get; set; }
        public ICollection<Car> Cars { get; set; } = new List<Car>();
        public int ExpectedKmPerDay { get; set; } = 0;
    }
}
