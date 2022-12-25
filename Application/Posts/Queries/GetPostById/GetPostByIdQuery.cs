using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Posts.Queries.GetPostById
{
    public record GetPostByIdQuery : IRequest<Post>
	{
		public int Id { get; set; }
	}

    public class GetPostByIdQueryHandler : IRequestHandler<GetPostByIdQuery, Post>
    {
        private readonly IApplicationDbContext _context;

        public GetPostByIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Post> Handle(GetPostByIdQuery request, CancellationToken cancellationToken)
        {
            var post = await _context.Posts.FirstOrDefaultAsync(p => p.Id == request.Id);

            if (post == null) throw new NotFoundException(nameof(Post), request.Id.ToString());

            //TODO IF TRASHED THROW EXCEPTION

            return post;
        }
    }
}

