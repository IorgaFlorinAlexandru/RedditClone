using RedditClone.Application.Common.Models;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;
using System.Text.Json.Serialization;

namespace RedditClone.Application.Communities.Commands.ChangeDescription
{
    public record ChangeDescriptionCommand : IRequest
    {
        [JsonIgnore]
        public Guid Id { get; set; }
        public string Description { get; set; } = string.Empty;
    }

    public class ChangeDescriptionCommandHandler : CommandHandler<ChangeDescriptionCommand>
    {
        public ChangeDescriptionCommandHandler(IRepositoryWrapper repository) : base(repository)
        {
        }

        public override async Task Handle(ChangeDescriptionCommand request, CancellationToken cancellationToken)
        {
            var community = _repository.Community.GetCommunityById(request.Id)
                ?? throw new EntityNotFoundException();

            community.Description = request.Description;

            _repository.Community.UpdateCommunity(community);

            await _repository.SaveAsync(cancellationToken);
        }
    }
}
