using System;
using Application.Common.Interfaces;
using Domain.Common;
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
            
                .Select(p=> new PostDTO(p))
                .ToArrayAsync();

            return posts;
        }
    }
}
