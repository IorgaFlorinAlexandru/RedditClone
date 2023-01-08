using System;
using Domain.Entities;

namespace Domain.Interfaces
{
	public interface ICommunity
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
        public ICollection<Post> CommunityPosts { get; set; }
    }
}

