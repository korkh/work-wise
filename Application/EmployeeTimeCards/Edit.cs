using Application.Core;
using AutoMapper;
using Domain.Entities;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.EmployeeTimeCards
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public List<EmployeeTimeCardDto> EmployeeTimeCards { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleForEach(x => x.EmployeeTimeCards).SetValidator(new EmployeeTimeCardValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                foreach (var dto in request.EmployeeTimeCards)
                {
                    var employeeTimeCard = await _context.EmployeeTimeCards
                        .Include(e => e.WorkingStates)
                        .FirstOrDefaultAsync(e => e.Id == dto.Id);

                    if (employeeTimeCard == null) return Result<Unit>.Failure("Employee time card not found");

                    _mapper.Map(dto, employeeTimeCard);

                    var existingIds = employeeTimeCard.WorkingStates.Select(w => w.Id).ToList();
                    var newIds = dto.WorkingStates.Select(w => w.Id).ToList();
                    var toRemove = existingIds.Except(newIds).ToList();

                    foreach (var id in toRemove)
                    {
                        var workingState = employeeTimeCard.WorkingStates.FirstOrDefault(w => w.Id == id);
                        if (workingState != null)
                        {
                            _context.WorkingStates.Remove(workingState);
                        }
                    }

                    // Update existing and add new working states
                    foreach (var workingStateDto in dto.WorkingStates)
                    {
                        var existingState = employeeTimeCard.WorkingStates.FirstOrDefault(w => w.Id == workingStateDto.Id);
                        if (existingState != null)
                        {
                            _mapper.Map(workingStateDto, existingState);
                        }
                        else
                        {
                            var newState = _mapper.Map<WorkingState>(workingStateDto);
                            employeeTimeCard.WorkingStates.Add(newState);
                        }
                    }
                }

                var result = await _context.SaveChangesAsync(cancellationToken) > 0;

                if (!result) return Result<Unit>.Failure("Failed to update employee time card");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
