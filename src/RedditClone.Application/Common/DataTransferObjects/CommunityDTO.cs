using RedditClone.Domain.Entities;

namespace RedditClone.Application.Common.DataTransferObjects
{
    public record CommunityDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public bool HasAdultContent { get; set; }

        private class Mapping : Profile
        {
            public Mapping()
            {
                CreateMap<Community, CommunityDTO>()
                    .ForMember(d => d.CreatedAt, opt => opt.MapFrom(src => src.Created))
                    .ForMember(d => d.UpdatedAt, opt => opt.MapFrom(src => src.LastUpdated));
            }
        }
    }
}
