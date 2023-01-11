using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using MediatR;

namespace Application.Posts.Commands.CreatePost
{
    public record CreatePostCommand : IRequest<int>
	{
        public int CommunityId { get; set; }

        public int CommunityType { get; set; }

		public string Title { get; set; } = string.Empty;

		public string OptionalText { get; set; } = string.Empty;
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
            CommunityType communityType;

            switch (request.CommunityType)
            {
                case 1:
                    community = _context.Subreddits.FirstOrDefault(s => s.Id == request.CommunityId);
                    communityType = CommunityType.Subreddit;
                    break;
                case 2:
                    throw new NotImplementedException(); //Profile
                default:
                    throw new Exception();
            }

            if (community == null) throw new NotFoundException(nameof(community),request.CommunityId.ToString());

            var post = new Post
            {
                Title = request.Title,
                OptionalText = request.OptionalText,
                PostedAt = DateTime.UtcNow,
                Community = community,
                CommunityType = communityType
            };

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

