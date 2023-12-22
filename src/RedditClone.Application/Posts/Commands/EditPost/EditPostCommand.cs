using RedditClone.Application.Common.Models;
using RedditClone.Domain.Enums;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;
using System.Text.Json.Serialization;

namespace RedditClone.Application.Posts.Commands.EditPost
{
    public record EditPostCommand : IRequest
    {
        [JsonIgnore]
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public PostType ContentType { get; set; }
    }

    public class EditPostCommandHandler : CommandHandler<EditPostCommand>
    {
        public EditPostCommandHandler(IRepositoryWrapper repository) : base(repository)
        {
        }

        public override async Task Handle(EditPostCommand request, CancellationToken cancellationToken)
        {
            var post = _repository.Post.GetPostById(request.Id)
                ?? throw new EntityNotFoundException();

            if (post.PostType != request.ContentType) throw new Exception("No same type");

            post.Title = request.Title;
            post.Content = request.ContentType == PostType.TEXT ? request.Content : post.Content;
            post.LastUpdated = DateTime.UtcNow;

            _repository.Post.UpdatePost(post);

            await _repository.SaveAsync(cancellationToken);

        }
    }
}
