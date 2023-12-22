using Microsoft.EntityFrameworkCore;
using RedditClone.Domain.Entities;
using RedditClone.Domain.Repositories;
using RedditClone.Infrastructure.Data;

namespace RedditClone.Infrastructure.Repositories
{
    public sealed class CommunityRepository : RepositoryBase<Community>, ICommunityRepository
    {
        public CommunityRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Community> GetAll()
        {
            return All();
        }

        public Community? GetCommunityByIdentifier(string identifier)
        {
            if(Guid.TryParse(identifier, out Guid id))
            {
                return GetCommunityById(id);
            }

            return GetCommunityByName(identifier);
        }

        public async Task<Community?> GetCommunityByIdentifierAsync(string identifier)
        {
            if(Guid.TryParse(identifier, out Guid id))
            {
                return await GetCommunityByIdAsync(id);
            }

            return await GetCommunityByNameAsync(identifier);
        }

        public Community? GetCommunityById(Guid Id)
        {
            return FindByCondition(c => c.Id == Id).FirstOrDefault();
        }

        public async Task<Community?> GetCommunityByIdAsync(Guid Id)
        {
            return await FindByCondition(c => c.Id == Id).FirstOrDefaultAsync();
        }

        public Community? GetCommunityByName(string name)
        {
            return FindByCondition(c => c.Name == name).FirstOrDefault();
        }

        public async Task<Community?> GetCommunityByNameAsync(string name)
        {
            return await FindByCondition(c => c.Name == name).FirstOrDefaultAsync();
        }

        public void CreateCommunity(Community community)
        {
            Create(community);
        }

        public void UpdateCommunity(Community community)
        {
            Update(community);
        }
        public void DeleteCommunity(Community community)
        {
            Delete(community);
        }
    }
}
