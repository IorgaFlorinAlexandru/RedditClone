using RedditClone.Application.Common.Models;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Communities.Commands.DeleteCommunity
{
    public record DeleteCommunityCommand : IRequest
    {
        public Guid Id { get; set; }
    }

    public class DeleteCommunityCommandHandler : CommandHandler<DeleteCommunityCommand>
    {
        public DeleteCommunityCommandHandler(IRepositoryWrapper repository) : base(repository)
        {
        }

        public override async Task Handle(DeleteCommunityCommand request, CancellationToken cancellationToken)
        {
            var community = _repository.Community.GetCommunityById(request.Id)
                ?? throw new EntityNotFoundException();

            _repository.Community.Delete(community);

            await _repository.SaveAsync(cancellationToken);
        }
    }
}
