using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using Domain.Entities.PostEntities;
using Domain.Enums;
using MediatR;

namespace Application.Posts.Commands.CreatePost
{
    public sealed record TextContent
    {
        public string OptionalText { get; set; } = null!;
    }

    public sealed record CreatePostCommand : IPostRequest<int>
	{
        public int CommunityId { get; set; }

        public string Title { get; set; } = string.Empty;

        public TextContent? Content { get; set; }

	}

    public class CreatePostCommandHandler : IRequestHandler<CreatePostCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICommunityService _communityService;
        private readonly IPostService _postService;

        public CreatePostCommandHandler(IApplicationDbContext context,
            ICommunityService communityService, IPostService postService)
        {
            _context = context;
            _communityService = communityService;
            _postService = postService;
        }

        public async Task<int> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            Subreddit community = await _communityService.FindCommunity(request.CommunityId);

            var post = _postService.CreatePost(request,community);

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

