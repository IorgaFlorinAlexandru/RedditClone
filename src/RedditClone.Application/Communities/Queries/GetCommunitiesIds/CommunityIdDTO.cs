using RedditClone.Domain.Entities;

namespace RedditClone.Application.Communities.Queries.GetCommunitiesIds
{
    public record CommunityIdDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;

        private class Mapping : Profile
        {
            public Mapping() 
            { 
                CreateMap<Community, CommunityIdDTO>();
            }
        }
    }
}
