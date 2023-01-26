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
    public record LinkContent
    {
        public string Link { get; set; } = string.Empty;
    }

	public record CreateLinkPostCommand : IPostRequest<int>
	{
        public int CommunityId { get; set; }

        public string Title { get; set; } = string.Empty;

        public LinkContent Content { get; set; } = null!;
    }

    public class CreateLinkPostCommandHandler : IRequestHandler<CreateLinkPostCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICommunityService _communityService;

        public CreateLinkPostCommandHandler(IApplicationDbContext context,ICommunityService communityService)
        {
            _context = context;
            _communityService = communityService;
        }

        public async Task<int> Handle(CreateLinkPostCommand request, CancellationToken cancellationToken)
        {
            Subreddit community = await _communityService.FindCommunity(request.CommunityId);

            var post = new Post
            {
                Title = request.Title,
                PostedAt = DateTime.UtcNow,
                Community = community,
                Content = new Link
                {
                    Url = request.Content.Link,
                    Type = ContentType.Link
                },
            };

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

