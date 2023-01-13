using System;
using Domain.Common;

namespace Domain.Entities
{
	public class Vote
	{
		public Guid Id { get; set; }
		public VoteValue Value { get; set; }


		public int PostId { get; set; }
		public Post Post { get; set; } = null!;
	}
}

