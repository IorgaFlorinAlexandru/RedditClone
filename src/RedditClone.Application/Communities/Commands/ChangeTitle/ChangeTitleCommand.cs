using RedditClone.Application.Common.Models;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;
using System.Text.Json.Serialization;

namespace RedditClone.Application.Communities.Commands.ChangeTitle
{
    public record ChangeTitleCommand : IRequest
    {
        [JsonIgnore]
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
    }

    public class ChangeTitleCommandHandler : CommandHandler<ChangeTitleCommand>
    {
        public ChangeTitleCommandHandler(IRepositoryWrapper repository) : base(repository)
        {
        }

        public override async Task Handle(ChangeTitleCommand request, CancellationToken cancellationToken)
        {
            var community = _repository.Community.GetCommunityById(request.Id);

            if (community == null) throw new EntityNotFoundException();

            community.Title = request.Title;

            _repository.Community.UpdateCommunity(community);

            await _repository.SaveAsync(cancellationToken);
        }
    }
}
