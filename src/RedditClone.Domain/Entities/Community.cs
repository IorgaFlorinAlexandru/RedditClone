using RedditClone.Domain.Common;
using RedditClone.Domain.Enums;

namespace RedditClone.Domain.Entities
{
    public sealed class Community : AuditableEntity<Guid>
    {
        public string Title { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public CommunityType CommunityType { get; set; }    
        public string Description { get; set; } = string.Empty;
        public bool HasAdultContent { get; set; }
        public ICollection<Post> Posts { get; set; } = new List<Post>();
    }
}
