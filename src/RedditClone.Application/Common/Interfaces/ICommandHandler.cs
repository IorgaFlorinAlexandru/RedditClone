using MediatR;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application.Common.Interfaces
{
    public interface ICommandHandler<TRequest> : IRequestHandler<TRequest>
        where TRequest : IRequest
    {
    }

    public interface ICommandHandler<TRequest, TResponse> : IRequestHandler<TRequest,TResponse>
        where TRequest : IRequest<TResponse>
    {
    }
}
