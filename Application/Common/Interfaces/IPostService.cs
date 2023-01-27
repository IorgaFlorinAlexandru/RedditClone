using System;
using Domain.Entities;

namespace Application.Common.Interfaces
{
	public interface IPostService
	{
        Post CreatePost(IPostRequest<int> request,Subreddit community);
        Task<Post> FindPost(int id);
    }
}

