using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using Domain.Entities.PostEntities;
using Domain.Enums;
using MediatR;

namespace Application.Posts.Commands.CreatePost
{
    public record TextContent
    {
        public string OptionalText { get; set; } = null!;
    }

    public record CreatePostCommand : IPostRequest<int>
	{
        public int CommunityId { get; set; }

        public string Title { get; set; } = string.Empty;

        public TextContent? Content { get; set; }

	}

    public class CreatePostCommandHandler : IRequestHandler<CreatePostCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICommunityService _communityService;

        public CreatePostCommandHandler(IApplicationDbContext context, ICommunityService communityService)
        {
            _context = context;
            _communityService = communityService;
        }

        public async Task<int> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            Subreddit community = await _communityService.FindCommunity(request.CommunityId);

            var post = new Post
            {
                Title = request.Title,
                PostedAt = DateTime.UtcNow,
                Community = community,
                Content = request.Content != null ? new OptionalText
                {
                    Text = request.Content.OptionalText,
                    Type = ContentType.Text
                } : null,
            };

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

