using RedditClone.Application.Common.Models;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Communities.Queries.GetCommunitiesIds
{
    public record GetCommunityIdsQuery : IRequest<List<CommunityIdDTO>>
    {
    }

    public class GetCommunityIdsQueryHandler : QueryHandler<GetCommunityIdsQuery, List<CommunityIdDTO>>
    {
        public GetCommunityIdsQueryHandler(IRepositoryWrapper repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<List<CommunityIdDTO>> Handle(GetCommunityIdsQuery request, CancellationToken cancellationToken)
        {
            var communities = await _repository.Community
                .GetAll()
                .ProjectTo<CommunityIdDTO>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return communities;
        }
    }
}
