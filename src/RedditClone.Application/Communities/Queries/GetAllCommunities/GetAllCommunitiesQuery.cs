using RedditClone.Application.Common.DataTransferObjects;
using RedditClone.Application.Common.Models;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Communities.Queries.GetAllCommunities
{
    public record GetAllCommunitiesQuery : IRequest<List<CommunityDTO>>
    {
    }

    public class GetAllCommunitiesQueryHandler : QueryHandler<GetAllCommunitiesQuery, List<CommunityDTO>>
    {
        public GetAllCommunitiesQueryHandler(IRepositoryWrapper repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<List<CommunityDTO>> Handle(GetAllCommunitiesQuery request, CancellationToken cancellationToken)
        {
            var communities = await _repository.Community
                .GetAll()
                .ProjectTo<CommunityDTO>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return communities;
        }
    }
}
