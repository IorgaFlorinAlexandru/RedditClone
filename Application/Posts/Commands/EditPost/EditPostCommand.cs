using System.Text.Json.Serialization;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Posts.Commands.EditPost
{
    public record EditPostCommand : IRequest
	{
		public int Id { get; set; }

		public string Title { get; set; } = string.Empty;

		public string OptionalText { get; set; } = string.Empty;
	}

    public class EditPostCommandHandler : IRequestHandler<EditPostCommand>
    {
        private readonly IApplicationDbContext _context;

        public EditPostCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(EditPostCommand request, CancellationToken cancellationToken)
        {
            var post = _context.Posts.FirstOrDefault(p => p.Id == request.Id);

            if (post == null) throw new NotFoundException(nameof(Post), request.Id.ToString());

            post.Title = request.Title;
            post.OptionalText = request.OptionalText;
            post.ModifiedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}

