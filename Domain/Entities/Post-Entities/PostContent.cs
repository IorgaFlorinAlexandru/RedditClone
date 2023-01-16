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

		//IF SET TO VIRTUAL, VALUE IN DB WILL BE SET TO 0
		public ContentType Type { get; set; }

		public static PostContent? CreateContent(ContentType type, object value)
		{
			if (value == null) return null;

			switch (type)
			{
				case ContentType.Text:
					return new OptionalText { Text = value.ToString()!, Type = type };
				case ContentType.Link:
					return new Link { Url = value.ToString()!, Type = type };
                default:
					return null;
			}
		}
	}
}

