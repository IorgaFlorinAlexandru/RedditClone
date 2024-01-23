using RedditClone.Application.Common.Models;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application;

public record CheckNameUniquenessCommand: IRequest<bool>
{
    public string Name  { get; set; } = string.Empty;
}

public class CheckNameUniquenessCommandHandler : CommandHandler<CheckNameUniquenessCommand, bool>
{
    public CheckNameUniquenessCommandHandler(IRepositoryWrapper repository) : base(repository)
    {
    }

    public override async Task<bool> Handle(CheckNameUniquenessCommand request, CancellationToken cancellationToken)
    {
        return await _repository.Community.All().AnyAsync(c => c.Name == request.Name);
    }
}
