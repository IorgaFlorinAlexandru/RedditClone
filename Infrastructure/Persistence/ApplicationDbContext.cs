using System;
using Application.Common.Interfaces;
using Domain.Entities;
using Domain.Entities.PostEntities;
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

        public DbSet<Comment> Comments => Set<Comment>();

        public DbSet<PostImage> PostImages => Set<PostImage>();

        public DbSet<Link> PostLinks => Set<Link>();

        public DbSet<OptionalText> PostOptionalTexts => Set<OptionalText>();

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.Entity<Subreddit>()
            //    .HasMany(s => s.SubredditPosts)
            //    .WithOne(p => p.Subreddit)
            //    .HasForeignKey(p => p.SubredditId);

            builder.Entity<Post>()
                .HasOne(p => p.Community)
                .WithMany(s => s.CommunityPosts)
                .HasForeignKey(p => p.SubredditId);

            builder.Entity<Comment>()
                .HasOne(c => c.Post)
                .WithMany(p => p.Comments)
                .HasForeignKey(c => c.PostId);

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

