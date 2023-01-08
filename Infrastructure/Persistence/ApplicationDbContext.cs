using System;
using Application.Common.Interfaces;
using Domain.Entities;
using Duende.IdentityServer.EntityFramework.Options;
using Infrastructure.Identity;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Infrastructure.Persistence
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>, IApplicationDbContext
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions
            )
            : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Post> Posts => Set<Post>();

        public DbSet<Subreddit> Subreddits => Set<Subreddit>();

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.Entity<Subreddit>()
            //    .HasMany(s => s.SubredditPosts)
            //    .WithOne(p => p.Subreddit)
            //    .HasForeignKey(p => p.SubredditId);

            builder.Entity<Post>()
                .HasOne(p => p.Community)
                .WithMany(s => s.CommunityPosts)
                .HasForeignKey(p => p.CommunityId);

            base.OnModelCreating(builder);
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return await base.SaveChangesAsync(cancellationToken);
        }

        public override int SaveChanges()
        {
            return base.SaveChanges();
        }
    }
}

