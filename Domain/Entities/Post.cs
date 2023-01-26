using System;
using Domain.Common;
using Domain.Entities.PostEntities;
using Domain.Interfaces;

namespace Domain.Entities
{
	public class Post
	{
		public int Id { get; set; }

		public string Title { get; set; } = string.Empty;

		public PostContent? Content { get; set; }

		public DateTime PostedAt { get; set; }

		public DateTime? ModifiedAt { get; set; } = null;

		public bool isTrashed { get; set; } = false;

		public DateTime? DeletedAt { get; set; } = null;

		public int SubredditId { get; set; }
		public Subreddit Community { get; set; } = null!;
		
		public virtual ICollection<Comment>? Comments { get; set; }

    }
}

