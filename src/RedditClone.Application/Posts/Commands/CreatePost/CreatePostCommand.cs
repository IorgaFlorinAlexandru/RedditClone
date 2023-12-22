using RedditClone.Application.Common.Models;
using RedditClone.Domain.Entities;
using RedditClone.Domain.Enums;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Posts.Commands.CreatePost
{
    public record CreatePostCommand : IRequest<Guid>
    {
        public string Title { get; set; } = string.Empty;
        public PostType ContentType { get; set; }
        public string Content { get; set; } = string.Empty;
        public Guid CommunityId { get; set; }
    }

    public class CreatePostCommandHandler : CommandHandler<CreatePostCommand, Guid>
    {
        public CreatePostCommandHandler(IRepositoryWrapper repository) : base(repository)
        {
        }

        public override async Task<Guid> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            var community = _repository.Community.GetCommunityById(request.CommunityId)
                ?? throw new EntityNotFoundException();

            var post = new Post
            {
                Title = request.Title,
                Content = request.Content,
                PostType = request.ContentType,
                Community = community,
                Created = DateTime.UtcNow,
            };

            _repository.Post.CreatePost(post);

            await _repository.SaveAsync(cancellationToken);

            return post.Id;
        }
    }
}
