using System;
using Domain.Enums;

namespace Domain.Entities.PostEntities
{
	public class PostImage : PostContent
	{
		public byte[] Bytes { get; set; } = null!;
    }
}

