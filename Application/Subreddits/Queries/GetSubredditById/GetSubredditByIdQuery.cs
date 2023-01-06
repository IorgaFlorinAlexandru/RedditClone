using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Subreddits.Queries.GetSubredditById
{
	public sealed record GetSubredditByIdQuery : IRequest<SubredditDTO>
	{
		public int Id { get; set; }
	}

    public sealed class GetSubredditByIdQueryHandler : IRequestHandler<GetSubredditByIdQuery, SubredditDTO>
    {
        private readonly IApplicationDbContext _context;

        public GetSubredditByIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<SubredditDTO> Handle(GetSubredditByIdQuery request, CancellationToken cancellationToken)
        {
            var subreddit = await _context.Subreddits.FirstOrDefaultAsync(s => s.Id == request.Id);

            if (subreddit == null) throw new NotFoundException(nameof(Subreddit), request.Id.ToString());

            return new SubredditDTO(subreddit);
        }
    }
}

