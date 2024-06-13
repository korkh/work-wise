using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Storage;

namespace Application.BusinessTrips
{
    public class Details
    {
        public class Query : IRequest<Result<BusinessTripDto>>
        {
            public Guid Id { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Id).NotEmpty().WithMessage("Business Trip ID is required.");
            }
        }

        public class Handler : IRequestHandler<Query, Result<BusinessTripDto>>
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

            public async Task<Result<BusinessTripDto>> Handle(
                Query request,
                CancellationToken cancellationToken
            )
            {
                var businessTrip = await _context
                    .BusinessTrips.AsNoTracking()
                    .ProjectTo<BusinessTripDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(bt => bt.Id == request.Id, cancellationToken);

                if (businessTrip == null)
                {
                    _logger.LogError("Business trip not found with ID: {BusinessTripId}", request.Id);
                    return Result<BusinessTripDto>.Failure("Business trip not found");
                }

                return Result<BusinessTripDto>.Success(businessTrip);
            }
        }
    }
}
