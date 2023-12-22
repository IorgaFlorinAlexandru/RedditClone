using RedditClone.Application.Common.Models;
using RedditClone.Domain.Entities;
using RedditClone.Domain.Enums;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Communities.Commands.CreateCommunity
{
    public record CreateCommunityCommand : IRequest<Guid>
    {
        public string Name { get; set; } = string.Empty;
        public CommunityType CommunityType { get; set; }
        public bool IsNsfw { get; set; } 
    }

    public class CreateCommunityCommandHanlder : CommandHandler<CreateCommunityCommand,Guid>
    {
        public CreateCommunityCommandHanlder(IRepositoryWrapper repository) : base(repository)
        {
        }

        public override async Task<Guid> Handle(CreateCommunityCommand request, CancellationToken cancellationToken)
        {
            var community = new Community
            {
                Name = request.Name,
                Title = request.Name,
                Description = string.Empty,
                CommunityType = request.CommunityType,
                HasAdultContent = request.IsNsfw,
                Created = DateTime.UtcNow,
                CreatedBy = string.Empty //TODO ADD USER ID
            };

            _repository.Community.Create(community);

            await _repository.SaveAsync();

            return community.Id;
        }
    }
}
