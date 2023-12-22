using RedditClone.Application.Common.Models;
using RedditClone.Domain.Enums;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;
using System.Text.Json.Serialization;

namespace RedditClone.Application.Communities.Commands.EditCommunity
{
    public record EditCommunityCommand : IRequest
    {
        [JsonIgnore]
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public CommunityType CommunityType { get; set; }
        public bool HasAdultContent { get; set; }
    }

    public class EditCommunityCommandHandler : CommandHandler<EditCommunityCommand>
    {
        public EditCommunityCommandHandler(IRepositoryWrapper repository) : base(repository)
        {
        }

        public override async Task Handle(EditCommunityCommand request, CancellationToken cancellationToken)
        {
            var community = _repository.Community.GetCommunityById(request.Id) 
                ?? throw new EntityNotFoundException();

            community.Title = request.Title;
            community.Description = request.Description;
            community.CommunityType = request.CommunityType;
            community.HasAdultContent = request.HasAdultContent;
            community.LastUpdated = DateTime.UtcNow;

            _repository.Community.UpdateCommunity(community);

            await _repository.SaveAsync(cancellationToken);
        }
    }
}
