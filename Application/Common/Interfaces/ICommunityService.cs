using System;
using Domain.Common;
using Domain.Entities;

namespace Application.Common.Interfaces
{
	public interface ICommunityService
	{
		public Task<Subreddit> FindCommunity(int id);
	}
}

