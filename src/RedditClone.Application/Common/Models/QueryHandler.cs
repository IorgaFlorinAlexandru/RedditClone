using AutoMapper;
using MediatR;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Common.Models
{
    public abstract class QueryHandler<TRequest, TResponse> : IRequestHandler<TRequest, TResponse>
        where TRequest : IRequest<TResponse>
    {
        protected readonly IRepositoryWrapper _repository;
        protected readonly IMapper _mapper;

        protected QueryHandler(IRepositoryWrapper repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public abstract Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken);
    }
}
