using System;
using Domain.Entities;

namespace Application.Subreddits.Queries
{
	public class SubredditDTO
	{
		public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; }

        public SubredditDTO(Subreddit sub)
        {
            Id = sub.Id;
            Name = sub.Name;
            Title = sub.Title;
            Description = sub.Description;

            CreatedAt = sub.CreatedAt;
        }
    }
}

