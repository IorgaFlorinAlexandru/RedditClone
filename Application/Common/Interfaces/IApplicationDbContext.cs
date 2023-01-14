using Domain.Entities;
using Domain.Entities.PostEntities;
using Microsoft.EntityFrameworkCore;

namespace Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Post> Posts { get; }

        DbSet<PostImage> PostImages { get; }

        DbSet<Link> PostLinks { get; }

        DbSet<OptionalText> PostOptionalTexts { get; }

        DbSet<Subreddit> Subreddits { get; }

        DbSet<Comment> Comments { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}

