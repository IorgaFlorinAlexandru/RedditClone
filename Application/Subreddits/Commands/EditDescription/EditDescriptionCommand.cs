using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Subreddits.Commands.EditDescription
{
	public sealed record EditDescriptionCommand : IRequest
	{
		public int Id { get; set; }
		public string Description { get; set; } = string.Empty;
	}

    public sealed class EditDescriptionCommandHandler : IRequestHandler<EditDescriptionCommand, Unit>
    {
        private readonly IApplicationDbContext _context;

        public EditDescriptionCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(EditDescriptionCommand request, CancellationToken cancellationToken)
        {
            var subreddit = await _context.Subreddits.FirstOrDefaultAsync(s => s.Id == request.Id);

            if (subreddit == null) throw new NotFoundException(nameof(Subreddit), request.Id.ToString());

            subreddit.Description = request.Description;

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}

