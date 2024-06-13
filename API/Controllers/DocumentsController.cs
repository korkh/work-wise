using Application.Documents;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize(Policy = "AdminsOnly")]
    public class DocumentsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetDocuments([FromQuery] DocumentParams param)
        {
            return HandlePagedResult(await Mediator.Send(new List.Query { Params = param }));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDocument(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost("{employeeId}")]
        public async Task<IActionResult> CreateDocument(Guid employeeId, DocumentDto documentDto)
        {
            return HandleResult(
                await Mediator.Send(
                    new Create.Command { Document = documentDto, EmployeeId = employeeId }
                )
            );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditDocument(Guid id, DocumentDto documentDto)
        {
            documentDto.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Document = documentDto }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocument(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}
