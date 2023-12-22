using RedditClone.Application.Common.Models;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Posts.Commands.DeletePost
{
    public record DeletePostCommand : IRequest
    {
        public Guid Id { get; set; }
    }

    public class DeletePostCommandHandler : CommandHandler<DeletePostCommand>
    {
        public DeletePostCommandHandler(IRepositoryWrapper repository) : base(repository)
        {
        }

        public override async Task Handle(DeletePostCommand request, CancellationToken cancellationToken)
        {
            var post = _repository.Post.GetPostById(request.Id)
                ?? throw new EntityNotFoundException();

            _repository.Post.DeletePost(post);

            await _repository.SaveAsync(cancellationToken);
        }
    }
}
