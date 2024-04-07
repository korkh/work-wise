using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Storage;

namespace Application.Employees
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<EmployeeDto>>>
        {
            public EmployeeParams Params { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<EmployeeDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;

            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<PagedList<EmployeeDto>>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var query = _context
                    .Employees.OrderBy(e => e.LastName)
                    .ProjectTo<EmployeeDto>(
                        _mapper.ConfigurationProvider,
                        new { currentUserName = _userAccessor.GetUserName() }
                    );

                // Filter by last name if provided in the request
                if (!string.IsNullOrEmpty(request.Params.LastName))
                {
                    query = query.Where(e => e.LastName == request.Params.LastName);
                }

                // Filter by availability
                if (request.Params.IsAvailable && !request.Params.IsFired)
                {
                    query = query.Where(e => e.LastName == _userAccessor.GetUserName());
                }

                // Filter by fired
                if (request.Params.IsFired && !request.Params.IsAvailable)
                {
                    query = query.Where(e => e.LastName == _userAccessor.GetUserName());
                }

                // Filter by documents expiring in 2 months
                if (request.Params.HasDocumentExpiringInTwoMonths)
                {
                    query = query.Where(e => e.Documents.Any(d => d.HasTwoMonthWarning));
                }

                // Filter by documents expiring in 3 months
                if (request.Params.HasDocumentExpiringInThreeMonths)
                {
                    query = query.Where(e => e.Documents.Any(d => d.HasThreeMonthWarning));
                }

                // Filter by documents expiring in 6 months
                if (request.Params.HasDocumentExpiringInSixMonths)
                {
                    query = query.Where(e => e.Documents.Any(d => d.HasSixMonthWarning));
                }

                return Result<PagedList<EmployeeDto>>.Success(
                    await PagedList<EmployeeDto>.CreateAsync(
                        query,
                        request.Params.PageNumber,
                        request.Params.PageSize
                    )
                );
            }
        }
    }
}
