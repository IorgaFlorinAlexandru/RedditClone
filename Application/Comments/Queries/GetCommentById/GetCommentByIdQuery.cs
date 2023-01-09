using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Comments.Queries.GetCommentById
{
    public sealed record GetCommentByIdQuery : IRequest<CommentDTO>
	{
		public int Id { get; set; }
	}

    public sealed class GetCommentByIdQueryHandler : IRequestHandler<GetCommentByIdQuery, CommentDTO>
    {
        private readonly IApplicationDbContext _context;

        public GetCommentByIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<CommentDTO> Handle(GetCommentByIdQuery request, CancellationToken cancellationToken)
        {
            var comment = await _context.Comments.FirstOrDefaultAsync(c => c.Id == request.Id);

            if (comment == null) throw new NotFoundException(nameof(Comment), request.Id.ToString());

            return new CommentDTO(comment);
        }
    }

}

