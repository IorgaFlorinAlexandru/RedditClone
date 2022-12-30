using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;

namespace Application.Posts.Commands.VotePost
{
	public record VotePostCommand : IRequest
	{
		public int Id { get; set; }
		public int Vote { get; set; }
	}

    public class VotePostCommandHandler : IRequestHandler<VotePostCommand>
    {
        private readonly IApplicationDbContext _context;

        public VotePostCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(VotePostCommand request, CancellationToken cancellationToken)
        {
            var post = _context.Posts.FirstOrDefault(p => p.Id == request.Id);

            if (post == null) throw new NotFoundException(nameof(Post), request.Id.ToString());

            switch (request.Vote)
            {
                case 1:
                    post.Upvotes++;
                    //TODO SAVE REL IN RELATIONAL TABLE
                    break;
                case -1:
                    post.Upvotes--;
                    break;
                case 0:
                    //TODO SEARCH IN RELATIONAL TABLE AND REMOVE 1 OR ADD 1
                    break;
                default:
                    throw new Exception();
            }

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}

