using System;
using Domain.Common;
using Domain.Interfaces;

namespace Domain.Entities
{
	public class Post
	{
		public int Id { get; set; }

		public string Title { get; set; } = string.Empty;

		public string OptionalText { get; set; } = string.Empty;

		public DateTime PostedAt { get; set; }

		public DateTime? ModifiedAt { get; set; } = null;

		public bool isTrashed { get; set; } = false;

		public DateTime? DeletedAt { get; set; } = null;

		public int CommunityId { get; set; }
		public Community Community { get; set; } = null!;
		public CommunityType CommunityType { get; set; }

		public virtual ICollection<Comment> Comments { get; set; } = null!;

    }
}

