using RedditClone.Domain.Entities;
using RedditClone.Domain.Enums;

namespace RedditClone.Application.Common.DataTransferObjects
{
    public record PostDTO
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public PostType PostType { get; set; }
        public string Content { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string OriginalPoster { get; set; } = string.Empty;
        public string Community { get; set; } = string.Empty;
        private class Mapping : Profile
        {
            public Mapping()
            {
                CreateMap<Post, PostDTO>()
                    .ForMember(d => d.CreatedAt, opt => opt.MapFrom(src => src.Created))
                    .ForMember(d => d.UpdatedAt, opt => opt.MapFrom(src => src.LastUpdated))
                    .ForMember(d => d.PostType, opt => opt.MapFrom(src => src.PostType))
                    .ForMember(d => d.Community, opt => opt.MapFrom(src => src.Community.Name))
                    .ForMember(d => d.OriginalPoster, opt => opt.MapFrom(src => "user"));
            }
        }
    }
}
