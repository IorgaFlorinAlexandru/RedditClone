using Microsoft.EntityFrameworkCore;
using RedditClone.Domain.Entities;
using RedditClone.Domain.Repositories;
using RedditClone.Infrastructure.Data;

namespace RedditClone.Infrastructure.Repositories
{
    public class PostRepository : RepositoryBase<Post>, IPostRepository
    {
        public PostRepository(ApplicationDbContext context) 
            :base(context)
        {     
        }
        public IQueryable<Post> GetAll()
        {
            return All();
        }

        public IQueryable<Post> GetPostsByCommunity(Community community)
        {
            return FindByCondition(p => p.Community == community).AsNoTracking();
        }

        public Post? GetPostById(Guid Id)
        {
            return FindByCondition(p => p.Id == Id).FirstOrDefault();
        }

        public async Task<Post?> GetPostByIdAsync(Guid Id)
        {
            return await FindByCondition(p => p.Id == Id).FirstOrDefaultAsync();
        }

        public void CreatePost(Post post)
        {
            Create(post);
        }

        public void DeletePost(Post post)
        {
            Delete(post);
        }

        public void UpdatePost(Post post)
        {
            Update(post);
        }
    }
}
