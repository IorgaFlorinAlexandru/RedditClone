using RedditClone.Domain.Repositories;
using RedditClone.Infrastructure.Data;

namespace RedditClone.Infrastructure.Repositories
{
    public sealed class RepositoryWrapper : IRepositoryWrapper
    {

        private readonly ApplicationDbContext _context;
        public RepositoryWrapper(ApplicationDbContext context) 
        {
            _context = context;
        }

        private ICommunityRepository? _community;
        public ICommunityRepository Community
        {
            get
            {
                _community ??= new CommunityRepository(_context);

                return _community;
            }
        }

        private IPostRepository? _post;
        public IPostRepository Post
        {
            get
            {
                _post ??= new PostRepository(_context);
                return _post;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public async Task SaveAsync(CancellationToken cancellationToken = default)
        {
            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}
