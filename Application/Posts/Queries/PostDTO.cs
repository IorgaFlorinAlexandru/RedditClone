using System;
using Domain.Entities;

namespace Application.Posts.Queries
{
	public sealed class PostDTO
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string OptionalText { get; set; } = string.Empty;
		public int Upvotes { get; set; }
		public int Comments { get; set; } = 0;

		public string OriginalPoster { get; set; } = string.Empty;
		public string PosterId { get; set; } = string.Empty;

		public DateTime PostedAt { get; set; }
		public bool HasBeenEdited { get; set; } = false;

		public PostDTO(Post post)
		{
			Id = post.Id;
			Title = post.Title;
			OptionalText = post.OptionalText;
			Upvotes = post.Upvotes;

			OriginalPoster = "deleted";

			PostedAt = post.PostedAt;
			if (post.ModifiedAt != null) HasBeenEdited = true;
		}
    }
}

