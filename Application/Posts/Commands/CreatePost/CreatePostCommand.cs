using System;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Posts.Commands.CreatePost
{
	public record CreatePostCommand : IRequest<int>
	{
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
            var post = new Post
            {
                Title = request.Title,
                OptionalText = request.OptionalText,
                PostedAt = DateTime.UtcNow
            };

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

