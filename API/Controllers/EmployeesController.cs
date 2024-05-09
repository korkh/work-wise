using Application.Employees;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class EmployeesController : BaseApiController
    {
        [Authorize]
        [HttpGet] //api/employees
        public async Task<IActionResult> GetEmployees([FromQuery] EmployeeParams param)
        {
            return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployee(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [Authorize(Policy = "AdminsOnly")]
        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody] EmployeeDto employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return HandleResult(await Mediator.Send(new Create.Command { Employee = employee }));
        }

        [Authorize(Policy = "AdminsOnly")]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditEmployee(Guid id, EmployeeDto employee)
        {
            employee.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Employee = employee }));
        }

        [Authorize(Policy = "AdminsOnly")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
