using RedditClone.Domain.Repositories;
using RedditClone.Infrastructure.Data;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace RedditClone.Infrastructure.Repositories
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected ApplicationDbContext _context { get; set; }

        public RepositoryBase(ApplicationDbContext context)
        {
                _context = context;
        }

        public IQueryable<T> All() => _context.Set<T>().AsNoTracking();
        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> condition) => _context.Set<T>().Where(condition);
        public void Create(T entity) => _context.Set<T>().Add(entity);
        public void Update(T entity) => _context.Set<T>().Update(entity);
        public void Delete(T entity) => _context.Set<T>().Remove(entity);

    }
}
