using System;
using Domain.Enums;

namespace Domain.Entities.PostEntities
{
	public class Link : PostContent
	{
		public string Url { get; set; } = null!;
	}
}

