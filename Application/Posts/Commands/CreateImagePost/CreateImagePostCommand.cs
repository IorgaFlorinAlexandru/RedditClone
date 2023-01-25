using System;
using Application.Common.Interfaces;
using Domain.Common;
using MediatR;

namespace Application.Posts.Commands.CreateImagePost
{
    public record CreateImagePostCommand : IPostRequest<int>
    {
        public int CommunityId { get; set; }

        public CommunityType CommunityType { get; set; }

        public string Title { get; set; } = string.Empty;
    }

    public class CreateImagePostCommandHandler : IRequestHandler<CreateImagePostCommand, int>
    {
        private readonly IApplicationDbContext _context;
        private readonly IImageService _imageService;

        public CreateImagePostCommandHandler(IApplicationDbContext context, IImageService imageService)
        {
            _context = context;
            _imageService = imageService;
        }

        public Task<int> Handle(CreateImagePostCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}

