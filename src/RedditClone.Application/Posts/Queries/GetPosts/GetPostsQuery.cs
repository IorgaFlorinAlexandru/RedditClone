using RedditClone.Application.Common.DataTransferObjects;
using RedditClone.Application.Common.Models;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application;

public record GetPostsQuery: IRequest<List<PostDTO>>
{
    public string? CommunityIdentifier {get; set;}
    public string? Feed {get;set;}
}

public class GetPostsQueryHandler: QueryHandler<GetPostsQuery, List<PostDTO>>
{
    public GetPostsQueryHandler(IRepositoryWrapper repository, IMapper mapper) : base(repository, mapper)
    {
    }

    public override async Task<List<PostDTO>> Handle(GetPostsQuery request, CancellationToken cancellationToken)
    {
        if(request.CommunityIdentifier != null) {
            var community = await _repository.Community.GetCommunityByIdentifierAsync(request.CommunityIdentifier)
                ?? throw new EntityNotFoundException();

            var posts = await _repository.Post.GetPostsByCommunity(community)
                .ProjectTo<PostDTO>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return posts;
        }

        if(request.Feed != null) {
            var posts = await _repository.Post.GetAll()
                .ProjectTo<PostDTO>(_mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken);

            return posts;
        }

        return new List<PostDTO>();
    }
}
