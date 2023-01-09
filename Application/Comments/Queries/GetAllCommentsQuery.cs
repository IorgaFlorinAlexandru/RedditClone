using Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Comments.Queries
{
    public sealed record GetAllCommentsQuery : IRequest<CommentDTO[]>
	{
	}

    public sealed class GetAllCommentsQueryHandler : IRequestHandler<GetAllCommentsQuery, CommentDTO[]>
    {
        private readonly IApplicationDbContext _context;

        public GetAllCommentsQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<CommentDTO[]> Handle(GetAllCommentsQuery request, CancellationToken cancellationToken)
        {
            var comments = await _context.Comments.Select(c => new CommentDTO(c)).ToArrayAsync();

            return comments;
        }
    }
}

