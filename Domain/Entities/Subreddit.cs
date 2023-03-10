using System;
using Domain.Common;

namespace Domain.Entities
{
	public class Subreddit
	{
        public  int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
		public string Description { get; set; } = string.Empty;

		public DateTime CreatedAt { get; set; }

        public ICollection<Post> CommunityPosts { get; set; }
    }
}

