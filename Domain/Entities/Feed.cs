using System;
using Domain.Common;
using Domain.Interfaces;

namespace Domain.Entities
{
	public class Feed : Community
	{
		public string Title { get; set; } = string.Empty;
    }
}

