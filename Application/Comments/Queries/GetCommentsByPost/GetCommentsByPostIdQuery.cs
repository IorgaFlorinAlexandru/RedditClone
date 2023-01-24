using System;
using Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Comments.Queries.GetCommentsByPost
{
	public record GetCommentsByPostIdQuery : IRequest<CommentDTO[]>
	{
		public int PostId { get; set; }
	}

    public class GetCommentsByPostIdQueryHandler : IRequestHandler<GetCommentsByPostIdQuery, CommentDTO[]>
    {
        private readonly IApplicationDbContext _context;

        public GetCommentsByPostIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<CommentDTO[]> Handle(GetCommentsByPostIdQuery request, CancellationToken cancellationToken)
        {
            var comments = await _context.Comments
                .Where(c => c.PostId == request.PostId)
                .Select(c => new CommentDTO(c))
                .ToArrayAsync();

            return comments;
        }
    }
}

