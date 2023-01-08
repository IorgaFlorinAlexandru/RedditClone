using System;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Subreddits.Commands.CreateSubreddit
{
	public sealed record CreateSubredditCommand : IRequest<int>
	{
		public string Name { get; set; } = string.Empty;
	}

    public sealed class CreateSubredditCommandHandle : IRequestHandler<CreateSubredditCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreateSubredditCommandHandle(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateSubredditCommand request, CancellationToken cancellationToken)
        {
            var subreddit = new Subreddit
            {
                Name = request.Name,
                Title = request.Name,
                CreatedAt = DateTime.UtcNow
            };

            _context.Subreddits.Add(subreddit);

            await _context.SaveChangesAsync(cancellationToken);

            return subreddit.Id;
        }
    }
}

