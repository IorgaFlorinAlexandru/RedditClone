using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.DTO;
using Domain.Entities;
using Domain.Entities.PostEntities;
using Domain.Enums;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Posts.Queries.GetPostById
{
    public record GetPostByIdQuery : IRequest<PostDTO>
	{
		public int Id { get; set; }
	}

    public class GetPostByIdQueryHandler : IRequestHandler<GetPostByIdQuery, PostDTO>
    {
        private readonly IApplicationDbContext _context;

        public GetPostByIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<PostDTO> Handle(GetPostByIdQuery request, CancellationToken cancellationToken)
        {
            var post = await _context.Posts
                .Where(p => p.Id == request.Id)
                .Include(p => p.Content)
                .Include(p => p.Community)
                .Select(post => new PostDTO
                {
                    Id = post.Id,
                    Title = post.Title,
                    OriginalPoster = "deleted",
                    CreatedAt = post.PostedAt,
                    CommentsCount = post.Comments!.Count(),
                    UpvotesCount = 0,
                    Content = post.Content != null ? new ContentDTO
                    {
                        Id = post.Content.Id,
                        Content = ContentDTO.GetContent(post.Content),
                        Type = post.Content.Type
                    } : null,
                    Community = new CommunityDTO
                    {
                        Id = post.Community.Id,
                        Name = post.Community.Name,
                    }
                })
                .FirstOrDefaultAsync();

            if (post == null) throw new NotFoundException(nameof(Post), request.Id.ToString());

            //if (post.isTrashed) throw new NotFoundException(nameof(Post), request.Id.ToString()); //TODO MAYBE MAKE CUSTOM EXCEPTION

            return post;
        }
    }
}

