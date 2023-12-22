using RedditClone.Application.Common.DataTransferObjects;
using RedditClone.Application.Common.Models;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Posts.Queries.GetPostById
{
    public record GetPostByIdQuery : IRequest<PostDTO>
    {
        public Guid Id { get; set; }
    }

    public class GetPostByIdQueryHandler : QueryHandler<GetPostByIdQuery, PostDTO>
    {
        public GetPostByIdQueryHandler(IRepositoryWrapper repository, IMapper mapper) : base(repository, mapper)
        {
        }

        public override async Task<PostDTO> Handle(GetPostByIdQuery request, CancellationToken cancellationToken)
        {
            var post = await _repository.Post.GetPostByIdAsync(request.Id)
                ?? throw new EntityNotFoundException();

            return _mapper.Map<PostDTO>(post);
        }
    }
}
