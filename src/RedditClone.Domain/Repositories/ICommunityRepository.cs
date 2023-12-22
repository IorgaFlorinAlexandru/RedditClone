using RedditClone.Domain.Entities;

namespace RedditClone.Domain.Repositories
{
    public interface ICommunityRepository : IRepositoryBase<Community>
    {
        IQueryable<Community> GetAll();
        Community? GetCommunityByIdentifier(string identifier);
        Task<Community?> GetCommunityByIdentifierAsync(string identifier);
        Community? GetCommunityById(Guid Id);
        Task<Community?> GetCommunityByIdAsync(Guid Id);
        Community? GetCommunityByName(string name);
        Task<Community?> GetCommunityByNameAsync(string name);
        void CreateCommunity(Community community);
        void UpdateCommunity(Community community);
        void DeleteCommunity(Community community);
    }
}
