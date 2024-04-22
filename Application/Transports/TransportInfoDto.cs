using Domain.Entities;

namespace Application.Transports
{
    public class TransportInfoDto
    {
        public string DrivingLicenseNumber { get; set; }
        public string E_100_CardNumber { get; set; }
        public ICollection<CarDto> Cars { get; set; }
        public int ExpectedKmPerDay { get; set; } = 0;
    }
}
