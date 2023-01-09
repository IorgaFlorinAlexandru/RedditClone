using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Comments.Commands.EditComment
{
    public sealed record EditCommentCommand : IRequest
	{
        public int Id { get; set; }
		public string Text { get; set; } = string.Empty;
	}

    public sealed class EditCommentCommandHandler : IRequestHandler<EditCommentCommand>
    {
        private readonly IApplicationDbContext _context;

        public EditCommentCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(EditCommentCommand request, CancellationToken cancellationToken)
        {
            var comment = _context.Comments.FirstOrDefault(c => c.Id == request.Id);

            if (comment == null) throw new NotFoundException(nameof(Comment), request.Id.ToString());

            comment.Text = request.Text;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}

