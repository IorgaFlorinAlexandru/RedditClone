using RedditClone.Application.Common.DataTransferObjects;
using RedditClone.Application.Common.Models;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Posts.Queries.GetAllPosts
{
    public record GetAllPostsQuery : IRequest<List<PostDTO>>
    {
    }

    public class GetAllPostsQueryHandler : QueryHandler<GetAllPostsQuery, List<PostDTO>>
    {
        public GetAllPostsQueryHandler(IRepositoryWrapper repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<List<PostDTO>> Handle(GetAllPostsQuery request, CancellationToken cancellationToken)
        {
            var posts = await _repository.Post
                .GetAll()
                .ProjectTo<PostDTO>(_mapper.ConfigurationProvider)
                .ToListAsync();

            return posts;
        }
    }
}
