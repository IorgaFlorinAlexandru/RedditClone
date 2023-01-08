using System;
using Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Subreddits.Queries
{
	public sealed record GetAllSubredditsQuery : IRequest<SubredditDTO[]>
	{
	}

    public sealed class GetAllSubredditsQueryHandler : IRequestHandler<GetAllSubredditsQuery, SubredditDTO[]>
    {
        private readonly IApplicationDbContext _context;

        public GetAllSubredditsQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<SubredditDTO[]> Handle(GetAllSubredditsQuery request, CancellationToken cancellationToken)
        {
            var subreddits = await _context.Subreddits
                .Select(s => new SubredditDTO(s))
                .ToArrayAsync(cancellationToken);

            return subreddits;
        }
    }
}

