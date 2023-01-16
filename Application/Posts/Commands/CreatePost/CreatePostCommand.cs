using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using Domain.Entities.PostEntities;
using Domain.Enums;
using MediatR;

namespace Application.Posts.Commands.CreatePost
{
    public record Content
    {
        public ContentType Type { get; set; }
        public object Value { get; set; } = null!;
    }

    public record CreatePostCommand : IRequest<int>
	{
        public int CommunityId { get; set; }

        public CommunityType CommunityType { get; set; }

		public string Title { get; set; } = string.Empty;

        public Content? Content { get; set; }

	}

    public class CreatePostCommandHandler : IRequestHandler<CreatePostCommand, int>
    {
        private readonly IApplicationDbContext _context;

        public CreatePostCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            Community? community;

            switch (request.CommunityType)
            {
                case CommunityType.Subreddit:
                    community = _context.Subreddits.FirstOrDefault(s => s.Id == request.CommunityId);
                    break;
                case CommunityType.Profile:
                    throw new NotImplementedException(); //Profile
                default:
                    throw new Exception();
            }

            if (community == null) throw new NotFoundException(nameof(community),request.CommunityId.ToString());

            var post = new Post
            {
                Title = request.Title,
                PostedAt = DateTime.UtcNow,
                Community = community,
                CommunityType = request.CommunityType,
                Content = request.Content != null ? PostContent.CreateContent(request.Content.Type,request.Content.Value)
                    : null,
            };

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

