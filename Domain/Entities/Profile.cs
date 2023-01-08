using System;
using Domain.Common;

namespace Domain.Entities
{
	public class Profile : Community
	{
		public string UserId { get; set; } = string.Empty;
    }
}

