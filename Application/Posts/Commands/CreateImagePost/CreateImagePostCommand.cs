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
    public sealed record ImageContent
    {
        public string Path { get; set; } = string.Empty;
        public string? Description { get; set; }
    }

    public sealed record CreateImagePostCommand : IPostRequest<int>
    {
        public int CommunityId { get; set; }

        public string Title { get; set; } = string.Empty;

        public ImageContent Content { get; set; } = null!;
    }

    public sealed class CreateImagePostCommandHandler : IRequestHandler<CreateImagePostCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICommunityService _communityService;
        private readonly IPostService _postService;
        private readonly IFileService _fileService;

        public CreateImagePostCommandHandler(IApplicationDbContext context,
            ICommunityService communityService, IPostService postService,
            IFileService fileService)
        {
            _context = context;
            _communityService = communityService;
            _postService = postService;
            _fileService = fileService;
        }

        public async Task<int> Handle(CreateImagePostCommand request, CancellationToken cancellationToken)
        {
            Subreddit community = await _communityService.FindCommunity(request.CommunityId);

            if (!_fileService.CheckIfFileExists(request.Content.Path))
                throw new FileNotFoundException();

            var post = _postService.CreatePost(request,community);

            _context.Posts.Add(post);

            await _context.SaveChangesAsync(cancellationToken);

            return post.Id;
        }
    }
}

