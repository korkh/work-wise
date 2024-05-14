using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.Payrolls
{
    public class PayrollDetails
    {
        public class Query : IRequest<Result<PayrollDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PayrollDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly ILogger<Handler> _logger;

            public Handler(DataContext context, IMapper mapper, ILogger<Handler> logger)
            {
                _context = context;
                _mapper = mapper;
                _logger = logger;
            }

            public async Task<Result<PayrollDto>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var payroll = await _context
                    .Payrolls.AsNoTracking()
                    .ProjectTo<PayrollDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

                if (payroll == null)
                {
                    _logger.LogError("Payroll not found with ID: {PayrollId}", request.Id);
                    return Result<PayrollDto>.Failure("Payroll not found");
                }

                return Result<PayrollDto>.Success(payroll);
            }
        }
    }
}
