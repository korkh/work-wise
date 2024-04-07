using Application.Employees;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class EmployeesController : BaseApiController
    {
        [Authorize]
        [HttpGet] //api/employees
        public async Task<IActionResult> GetEmployees([FromQuery] EmployeeParams param) //we cannot use params due to reserved name so named that param
        {
            return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
        }

        [Authorize]
        [HttpGet("{id}")] //api/employees/asdasdasdd
        public async Task<IActionResult> GetEmployee(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        //in that method we are returning nothing. And when we are using IActionRequest it gives us access to the http response types which returns Ok(), return back request, return "Not found" but we don't need to specify the type we returning here
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateEmployee(Employee employee)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Employee = employee }));
            //Mediator is smart enough to recognize to look inside the body of the request (Training training) to get that object and compare the properties avalable inside training and if they match it that training you want to pass as parameter and it will look inside the body and going get it.
        }

        //Only host can edit and delete an training
        //Check IdentityServiceExtensions and IsHostRequirement
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> EditTraining(Guid id, Employee employee)
        {
            employee.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Employee = employee }));
        }

        //Only host can edit and delete an activity
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id })); //{Id = id} - object initializer
        }
    }
}
