using System;
using Domain.Entities;

namespace Application.Comments.Queries
{
	public class CommentDTO
	{
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public int Upvotes { get; set; } = 0;
        public bool HasBeenModified { get; set; }

        public DateTime CreatedAt { get; set; }

        public CommentDTO(Comment comment)
        {
            Id = comment.Id;
            Text = comment.Text;
            CreatedAt = comment.CreatedAt;
        }
    }
}

