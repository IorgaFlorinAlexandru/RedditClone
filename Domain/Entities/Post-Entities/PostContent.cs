using System;
using System.Text.Json.Serialization;

namespace Domain.Entities.PostEntities
{
	public abstract class PostContent
	{
		[JsonIgnore]
		public virtual int Id { get; set; }

		[JsonIgnore]
		public virtual int PostId { get; set; }
		[JsonIgnore]
		public virtual Post Post { get; set; } = null!;
	}
}

