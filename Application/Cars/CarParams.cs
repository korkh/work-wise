using Application.Core;

namespace Application.Transports
{
    public class CarParams : PagingParams
    {
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public string Year { get; set; }
        public string FuelType { get; set; }
    }
}
