using System;
using System.Text.Json.Serialization;
using Domain.Enums;

namespace Domain.Entities.PostEntities
{
	public abstract class PostContent
	{
		public virtual int Id { get; set; }
		public virtual int PostId { get; set; }
		public virtual Post Post { get; set; } = null!;
		public virtual ContentType Type { get; set; }
	}
}

