
using Application.BusinessTrips;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize(Policy = "AccountantsOnly")]
    public class BusinessTripsController : BaseApiController
    {
        [HttpGet] // api/businesstrips
        public async Task<IActionResult> GetBusinessTrips([FromQuery] BusinessTripParams param)
        {
            return HandleResult(await Mediator.Send(new List.Query { Params = param }));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBusinessTrip(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateBusinessTrip([FromBody] BusinessTripDto businessTrip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return HandleResult(await Mediator.Send(new Create.Command { BTrip = businessTrip }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditBusinessTrip(Guid id, BusinessTripDto businessTrip)
        {
            businessTrip.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command { BusinessTrip = businessTrip }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBusinessTrip(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
