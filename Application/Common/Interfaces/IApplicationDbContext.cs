using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Post> Posts { get; }

        DbSet<Subreddit> Subreddits { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}

