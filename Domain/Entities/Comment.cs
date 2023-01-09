using System;
namespace Domain.Entities
{
	public class Comment
	{
		public int Id { get; set; }
		public string Text { get; set; } = string.Empty;

		public DateTime CreatedAt { get; set; }
		public DateTime? ModifiedAt { get; set; } = null;

        //public bool isTrashed { get; set; } = false;
        //public DateTime? DeletedAt { get; set; } = null;

        public int PostId { get; set; }
		public Post Post { get; set; }
		//public string UserId { get; set; }
	}
}

