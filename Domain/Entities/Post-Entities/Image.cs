using System;
using Domain.Enums;

namespace Domain.Entities.PostEntities
{
	public class PostImage : PostContent
	{
		public string Path { get; set; } = null!;

		public string? Description { get; set; } = null;
    }
}

