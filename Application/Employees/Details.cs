using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Storage;

namespace Application.Employees
{
    public class Details
    {
        public class Query : IRequest<Result<EmployeeDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<EmployeeDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                this._userAccessor = userAccessor;
                this._mapper = mapper;
                _context = context;
            }

            public async Task<Result<EmployeeDto>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var training = await _context
                    .Employees.ProjectTo<EmployeeDto>(
                        _mapper.ConfigurationProvider,
                        new { currentUsername = _userAccessor.GetUserName() }
                    )
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<EmployeeDto>.Success(training);
            }
        }
    }
}
