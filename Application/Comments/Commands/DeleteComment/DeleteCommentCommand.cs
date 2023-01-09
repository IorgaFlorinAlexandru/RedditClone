using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Comments.Commands.DeleteComment
{
	public sealed record DeleteCommentCommand : IRequest
	{
		public int Id { get; set; }
	}

    public sealed class DeleteCommentCommanHandler : IRequestHandler<DeleteCommentCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteCommentCommanHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteCommentCommand request, CancellationToken cancellationToken)
        {
            var comment = _context.Comments.FirstOrDefault(c => c.Id == request.Id);

            if (comment == null) throw new NotFoundException(nameof(Comment), request.Id.ToString());

            _context.Comments.Remove(comment);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}

