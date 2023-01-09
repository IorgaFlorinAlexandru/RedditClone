using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Comments.Commands.CreateComment
{
	public sealed record CreateCommentCommand : IRequest<int>
	{
		public int PostId { get; set; }
		public string Text { get; set; } = string.Empty;
	}

    public sealed class CreateCommentCommandHandler : IRequestHandler<CreateCommentCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreateCommentCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateCommentCommand request, CancellationToken cancellationToken)
        {
            var post = _context.Posts.FirstOrDefault(p => p.Id == request.PostId);

            //_context.Set<T>().

            if (post == null) throw new NotFoundException(nameof(Post),request.PostId.ToString());

            var comment = new Comment
            {
                Text = request.Text,
                Post = post,
                CreatedAt = DateTime.UtcNow
            };

            _context.Comments.Add(comment);

            await _context.SaveChangesAsync(cancellationToken);

            return comment.Id;
        }
    }
}

