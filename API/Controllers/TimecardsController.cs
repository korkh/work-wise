using Application.EmployeeTimeCards;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize(Policy = "AccountantsOnly")]
    public class TimecardsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetEmployeeTimeCards()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpPost]
        public async Task<IActionResult> CreateEmployeeTimeCard(EmployeeTimeCardDto employeeTimeCardDto)
        {
            return HandleResult(await Mediator.Send(new Create.Command { EmployeeTimeCardDto = employeeTimeCardDto }));
        }

        [HttpPut]
        public async Task<IActionResult> EditEmployeeTimeCard([FromBody] List<EmployeeTimeCardDto> employeeTimeCardDtos)
        {
            return HandleResult(await Mediator.Send(new Edit.Command { EmployeeTimeCards = employeeTimeCardDtos }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeeTimeCard(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
