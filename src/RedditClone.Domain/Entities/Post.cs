using RedditClone.Domain.Common;
using RedditClone.Domain.Enums;

namespace RedditClone.Domain.Entities
{
    public sealed class Post : AuditableEntity<Guid>
    {
        public string Title { get; set; } = string.Empty;
        public string Content { get; set;} = string.Empty;
        public PostType PostType { get; set; }

        public Guid CommunityId { get; set; }
        public Community Community { get; set; } = null!;
    }
}
