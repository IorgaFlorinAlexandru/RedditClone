using System;
using Application.Common.Interfaces;
using Application.Posts.Commands.CreateImagePost;
using Application.Posts.Commands.CreateLinkPost;
using Application.Posts.Commands.CreatePost;
using Domain.Entities;
using Domain.Entities.PostEntities;
using Domain.Enums;

namespace Application.Common.Services
{
	public sealed class PostService : IPostService
	{
		public Post CreatePost(IPostRequest<int> request, Subreddit community)
		{
			var post = new Post
			{
				Title = request.Title,
                PostedAt = DateTime.UtcNow,
				Community = community,
            };

			switch (request)
			{
				case CreatePostCommand:
					{
						var command = request as CreatePostCommand;
						post.Content = command!.Content != null ? new OptionalText
						{
							Text = command.Content.OptionalText,
							Type = ContentType.Text
						} : null;
					}
					break;
				case CreateImagePostCommand:
					{
						var command = request as CreateImagePostCommand;
						post.Content = new PostImage
						{
							Path = command!.Content.Path,
							Description = command.Content.Description,
							Type = ContentType.Image
						};
					}
					break;
				case CreateLinkPostCommand:
					{
						var command = request as CreateLinkPostCommand;
						post.Content = new Link
						{
							Url = command!.Content.Link,
							Type = ContentType.Link
						};
					}
					break;
				default:
					post.Content = null;
					break;
			}

			return post;
		}

        public Task<Post> FindPost(int id)
        {
            throw new NotImplementedException();
        }
    }
}

