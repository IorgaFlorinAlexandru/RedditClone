using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Posts.Commands.CreatePost
{
	public record CreatePostCommand : IRequest<int>
	{
        public int SubredditId { get; set; }

		public string Title { get; set; } = string.Empty;

		public string OptionalText { get; set; } = string.Empty;
	}

    public class CreatePostCommandHandler : IRequestHandler<CreatePostCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreatePostCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            var subreddit = _context.Subreddits.FirstOrDefault(s => s.Id == request.SubredditId);

            if (subreddit == null) throw new NotFoundException(nameof(subreddit),request.SubredditId.ToString());

            var post = new Post
            {
                Title = request.Title,
                OptionalText = request.OptionalText,
                PostedAt = DateTime.UtcNow,
                Subreddit = subreddit
            };

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

