using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Subreddits.Commands.DeleteSubreddit
{
	public sealed record DeleteSubredditCommand : IRequest
	{
		public int Id { get; set; }
	}

    public sealed class DeleteSubredditCommandHandler : IRequestHandler<DeleteSubredditCommand, Unit>
    {
        private readonly IApplicationDbContext _context;

        public DeleteSubredditCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteSubredditCommand request, CancellationToken cancellationToken)
        {
            var subreddit = _context.Subreddits.FirstOrDefault(s => s.Id == request.Id);

            if (subreddit == null) throw new NotFoundException(nameof(Subreddit), request.Id.ToString());

            _context.Subreddits.Remove(subreddit);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}

