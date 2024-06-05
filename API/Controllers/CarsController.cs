using Application.Transports;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize(Policy = "AdminsOnly")]
    public class CarsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetCars([FromQuery] CarParams param)
        {
            return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCar(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateCar([FromBody] CarDto carDto)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Car = carDto }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditCar(Guid id, CarDto carDto)
        {
            carDto.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Car = carDto }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCar(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
