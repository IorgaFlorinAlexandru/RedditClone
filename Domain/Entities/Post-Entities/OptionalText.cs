using System;
using Domain.Enums;

namespace Domain.Entities.PostEntities
{
	public class OptionalText : PostContent
	{
		public string Text { get; set; } = string.Empty;
    }
}

