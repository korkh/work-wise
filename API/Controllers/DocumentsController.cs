using Application.Documents;
using Application.Employees;
using Domain;
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
            return HandlePagedResult(await Mediator.Send(new DocumentList.Query { Params = param }));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDocument(Guid id)
        {
            return HandleResult(await Mediator.Send(new DocumentDetails.Query { Id = id }));
        }

        [HttpPost("{employeeId}")]
        public async Task<IActionResult> CreateDocument(Guid employeeId, DocumentDto documentDto)
        {
            return HandleResult(
                await Mediator.Send(
                    new DocumentCreate.Command { Document = documentDto, EmployeeId = employeeId }
                )
            );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditDocument(Guid id, DocumentDto documentDto)
        {
            documentDto.Id = id;
            return HandleResult(await Mediator.Send(new DocumentEdit.Command { Document = documentDto }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDocument(Guid id)
        {
            return HandleResult(await Mediator.Send(new DocumentDelete.Command { Id = id }));
        }
    }
}
