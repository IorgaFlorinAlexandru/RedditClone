using System.Linq.Expressions;

namespace RedditClone.Domain.Repositories
{
    public interface IRepositoryBase<T>
    {
        IQueryable<T> All();
        IQueryable<T> FindByCondition(Expression<Func<T, bool>> condition);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
