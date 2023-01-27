using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using Domain.Entities.PostEntities;
using Domain.Enums;
using MediatR;

namespace Application.Posts.Commands.CreateLinkPost
{
    public sealed record LinkContent
    {
        public string Link { get; set; } = string.Empty;
    }

	public sealed record CreateLinkPostCommand : IPostRequest<int>
	{
        public int CommunityId { get; set; }

        public string Title { get; set; } = string.Empty;

        public LinkContent Content { get; set; } = null!;
    }

    public sealed class CreateLinkPostCommandHandler : IRequestHandler<CreateLinkPostCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICommunityService _communityService;
        private readonly IPostService _postService;

        public CreateLinkPostCommandHandler(IApplicationDbContext context,
            ICommunityService communityService, IPostService postService)
        {
            _context = context;
            _communityService = communityService;
            _postService = postService;
        }

        public async Task<int> Handle(CreateLinkPostCommand request, CancellationToken cancellationToken)
        {
            Subreddit community = await _communityService.FindCommunity(request.CommunityId);

            var post = _postService.CreatePost(request, community);

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

