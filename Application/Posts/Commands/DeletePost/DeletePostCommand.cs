using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Posts.Commands.DeletePost
{
	public record DeletePostCommand : IRequest
	{
		public int Id { get; set; }
	}

	public class DeletePostCommandHandler : IRequestHandler<DeletePostCommand>
	{
		private readonly IApplicationDbContext _context;

		public DeletePostCommandHandler(IApplicationDbContext context)
		{
			_context = context;
		}

        public async Task<Unit> Handle(DeletePostCommand request, CancellationToken cancellationToken)
        {
			var post = _context.Posts.FirstOrDefault(p => p.Id == request.Id);

			if (post == null) throw new NotFoundException(nameof(Post), request.ToString());

			_context.Posts.Remove(post);

			await _context.SaveChangesAsync(cancellationToken);

			return Unit.Value;
        }
    }
}

