using MediatR;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Common.Models
{
    public abstract class CommandHandler<TRequest> : IRequestHandler<TRequest>
        where TRequest : IRequest
    {
        protected readonly IRepositoryWrapper _repository;

        protected CommandHandler(IRepositoryWrapper repository)
        {
            _repository = repository;
        }

        public abstract Task Handle(TRequest request, CancellationToken cancellationToken);
    }

    public abstract class CommandHandler<TRequest, TResponse> : IRequestHandler<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
        protected readonly IRepositoryWrapper _repository;

        protected CommandHandler(IRepositoryWrapper repository)
        {
            _repository = repository;
        }

        public abstract Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken);
    }
}
