using System;
using Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Posts.Queries.GetSortedPosts
{
	public record GetSortedPostsQuery : IRequest<PostDTO[]>
	{
	}

    public class GetSortedPostsQueryHandler : IRequestHandler<GetSortedPostsQuery, PostDTO[]>
    {
        private readonly IApplicationDbContext _context;

        public GetSortedPostsQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<PostDTO[]> Handle(GetSortedPostsQuery request, CancellationToken cancellationToken)
        {
            var posts = await _context.Posts.Select(p => new PostDTO(p)).ToArrayAsync(cancellationToken);

            return posts;
        }
    }
}

