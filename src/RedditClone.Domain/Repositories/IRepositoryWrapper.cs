namespace RedditClone.Domain.Repositories
{
    public interface IRepositoryWrapper
    {
        ICommunityRepository Community { get; }
        IPostRepository Post { get; }
        void Save();
        Task SaveAsync(CancellationToken cancellationToken = default);
    }
}
