using System;
using Application.Common.Interfaces;
using Domain.Common;
using Domain.DTO;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Posts.Queries.GetPostsBySubreddit
{
    public sealed record GetPostsBySubredditQuery : IRequest<PostDTO[]>
    {
        public int SubredditId { get; set; }
    }

    public sealed class GetPostsBySubredditQueryHandler : IRequestHandler<GetPostsBySubredditQuery, PostDTO[]>
    {
        private readonly IApplicationDbContext _context;

        public GetPostsBySubredditQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<PostDTO[]> Handle(GetPostsBySubredditQuery request, CancellationToken cancellationToken)
        {
            var posts = await _context.Posts
                .Where(p => p.CommunityType == CommunityType.Subreddit && p.CommunityId == request.SubredditId)
                .Include(p => p.Content)
                .Include(p => p.Community)
                .Select(post => new PostDTO
                {
                    Id = post.Id,
                    Title = post.Title,
                    OriginalPoster = "deleted",
                    CreatedAt = post.PostedAt,
                    CommentsCount = post.Comments!.Count(),
                    UpvotesCount = 0,
                    Content = post.Content != null ? new ContentDTO
                    {
                        Id = post.Content.Id,
                        Content = ContentDTO.GetContent(post.Content),
                        Type = post.Content.Type
                    } : null,
                    Community = new CommunityDTO
                    {
                        Id = post.Community.Id,
                        Name = post.Community.Name,
                    }
                })
                .ToArrayAsync();
           
            return posts;
        }
    }
}
