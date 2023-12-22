using RedditClone.Domain.Entities;

namespace RedditClone.Domain.Repositories
{
    public interface IPostRepository: IRepositoryBase<Post>
    {
        IQueryable<Post> GetAll();
        Post? GetPostById(Guid Id);
        Task<Post?> GetPostByIdAsync(Guid Id);
        void CreatePost(Post post);
        void UpdatePost(Post post);
        void DeletePost(Post post);
    }
}
