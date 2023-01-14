using System;
using Domain.Entities;
using Domain.Entities.PostEntities;

namespace Application.Posts.Queries
{
	public sealed class PostDTO
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public int Upvotes { get; set; }
		public int Comments { get; set; } = 0;

		public PostContent Content { get; set; }

		public string OriginalPoster { get; set; } = string.Empty;
		public string PosterId { get; set; } = string.Empty;

		public DateTime PostedAt { get; set; }
		public bool HasBeenEdited { get; set; } = false;

		public int CommunityId { get; set; } //TODO REPLACE WITH OBJECT FOR COMMUNITY INFO DTO

		public PostDTO(Post post)
		{
			Id = post.Id;
			Title = post.Title;

			OriginalPoster = "deleted";

			PostedAt = post.PostedAt;
			if (post.ModifiedAt != null) HasBeenEdited = true;

			CommunityId = post.CommunityId;
		}

		public PostDTO(Post post,PostContent content)
		{
            Id = post.Id;
            Title = post.Title;
			Content = content;

            OriginalPoster = "deleted";

            PostedAt = post.PostedAt;
            if (post.ModifiedAt != null) HasBeenEdited = true;

            CommunityId = post.CommunityId;
        }
    }
}

