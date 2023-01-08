using System;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Posts.Queries
{
	public record GetAllPostsQuery : IRequest<Post[]>
	{
	}

    public class GetAllPostsQueryHandler : IRequestHandler<GetAllPostsQuery, Post[]>
    {
        private readonly IApplicationDbContext _context;

        public GetAllPostsQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Post[]> Handle(GetAllPostsQuery request, CancellationToken cancellationToken)
        {
            var posts = await _context.Posts.ToArrayAsync();

            return posts;
        }
    }
}

