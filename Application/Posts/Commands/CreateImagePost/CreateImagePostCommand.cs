using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Common;
using Domain.Entities;
using Domain.Entities.PostEntities;
using Domain.Enums;
using MediatR;

namespace Application.Posts.Commands.CreateImagePost
{
    public record ImageContent
    {
        public string Path { get; set; } = string.Empty;
        public string? Description { get; set; }
    }

    public record CreateImagePostCommand : IPostRequest<int>
    {
        public int CommunityId { get; set; }

        public string Title { get; set; } = string.Empty;

        public ImageContent Content { get; set; } = null!;
    }

    public class CreateImagePostCommandHandler : IRequestHandler<CreateImagePostCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICommunityService _communityService;

        public CreateImagePostCommandHandler(IApplicationDbContext context,ICommunityService communityService)
        {
            _context = context;
            _communityService = communityService;
        }

        public async Task<int> Handle(CreateImagePostCommand request, CancellationToken cancellationToken)
        {
            Subreddit community = await _communityService.FindCommunity(request.CommunityId);
            //TODO Post post = _postService.CreatePost(IPostRequest request);
            var post = new Post
            {
                Title = request.Title,
                PostedAt = DateTime.UtcNow,
                Community = community,
                Content = new PostImage
                {
                    Path = request.Content.Path,
                    Description = request.Content.Description,
                    Type = ContentType.Image
                },
            };

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

