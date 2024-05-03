using Application.Payrolls;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize(Policy = "AccountantsOnly")]
    public class PayrollsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetPayrolls([FromQuery] PayrollParams param)
        {
            return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
        }

        [HttpGet("{id}")] // api/payrolls/{id}
        public async Task<IActionResult> GetPayroll(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost("{employeeId}")]
        public async Task<IActionResult> CreatePayroll(Guid employeeId, PayrollDto payrollDto)
        {
            return HandleResult(
                await Mediator.Send(
                    new Create.Command { Payroll = payrollDto, EmployeeId = employeeId }
                )
            );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPayroll(Guid id, PayrollDto payrollDto)
        {
            Console.WriteLine("PAYROLL OBJECT AFTER EDITING:");
            var properties = typeof(PayrollDto).GetProperties();
            foreach (var prop in properties)
            {
                var value = prop.GetValue(payrollDto);
                Console.WriteLine($"{prop.Name}: {value}");
            }

            payrollDto.Id = id;
            if (payrollDto.Id != id)
            {
                return BadRequest("Mismatched ID in request path and body.");
            }
            return HandleResult(await Mediator.Send(new Edit.Command { Payroll = payrollDto }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayroll(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
