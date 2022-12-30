using System;
using Domain.Entities;

namespace Application.Posts.Queries
{
	public sealed class PostDTO
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string OptionalText { get; set; } = string.Empty;

		public DateTime PostedAt { get; set; }
		public bool HasBeenEdited { get; set; } = false;

		public PostDTO(Post post)
		{
			Id = post.Id;
			Title = post.Title;
			OptionalText = OptionalText;

			PostedAt = post.PostedAt;
			if (post.ModifiedAt != null) HasBeenEdited = true;
		}
    }
}

