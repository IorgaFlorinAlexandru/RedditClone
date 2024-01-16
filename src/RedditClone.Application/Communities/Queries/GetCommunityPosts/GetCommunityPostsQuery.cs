using RedditClone.Application.Common.DataTransferObjects;
using RedditClone.Application.Common.Models;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Communities.Queries.GetCommunityPosts
{
    public record GetCommunityPostsQuery : IRequest<List<PostDTO>>
    {
        public string Identifier { get; set; } = string.Empty;
    }

    public class GetCommunityPostsQueryHandler : QueryHandler<GetCommunityPostsQuery, List<PostDTO>>
    {
        public GetCommunityPostsQueryHandler(IRepositoryWrapper repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<List<PostDTO>> Handle(GetCommunityPostsQuery request, CancellationToken cancellationToken)
        {
            var community = await _repository.Community.GetCommunityByIdentifierAsync(request.Identifier)
                ?? throw new EntityNotFoundException();

            var posts = await _repository.Post.FindByCondition(p => p.CommunityId == community.Id)
                .ProjectTo<PostDTO>(_mapper.ConfigurationProvider).ToListAsync();

            return posts;
        }
    }
}
