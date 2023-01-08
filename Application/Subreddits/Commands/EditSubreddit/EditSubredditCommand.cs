using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Subreddits.Commands.EditSubreddit
{
	public sealed record EditSubredditCommand : IRequest
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string Description { get; set; } = string.Empty;
	}

    public sealed class EditSubredditCommandHandler : IRequestHandler<EditSubredditCommand, Unit>
    {
        private readonly IApplicationDbContext _context;

        public EditSubredditCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(EditSubredditCommand request, CancellationToken cancellationToken)
        {
            var subreddit = _context.Subreddits.FirstOrDefault(s => s.Id == request.Id);

            if (subreddit == null) throw new NotFoundException(nameof(Subreddit), request.Id.ToString());

            subreddit.Title = request.Title;
            subreddit.Description = request.Description;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}

