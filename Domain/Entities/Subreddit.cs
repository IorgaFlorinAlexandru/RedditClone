using System;
using Domain.Common;

namespace Domain.Entities
{
	public class Subreddit : Community
	{
		public string Title { get; set; } = string.Empty;
		public string Description { get; set; } = string.Empty;

		public DateTime CreatedAt { get; set; }
	}
}

