using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Common.Services
{
	public sealed class CommunityService : ICommunityService
	{
        private readonly IApplicationDbContext _context;
		public CommunityService(IApplicationDbContext context)
		{
            _context = context;
		}

        public async Task<Subreddit> FindCommunity(int id)
        {
            Subreddit? community =  await _context.Subreddits.FirstOrDefaultAsync(s => s.Id == id);

            if (community == null) throw new NotFoundException(nameof(community), id.ToString());

            return community;
        }
    }
}

