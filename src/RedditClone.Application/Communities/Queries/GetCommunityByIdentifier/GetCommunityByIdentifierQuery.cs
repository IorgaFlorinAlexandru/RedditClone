using RedditClone.Application.Common.DataTransferObjects;
using RedditClone.Application.Common.Models;
using RedditClone.Domain.Exceptions;
using RedditClone.Domain.Repositories;

namespace RedditClone.Application;

public record GetCommunityByIdentifierQuery : IRequest<CommunityDTO>
{
    public string Identifier { get; set; } = string.Empty;
}

public class GetCommunityByIdentifierQueryHandler : QueryHandler<GetCommunityByIdentifierQuery, CommunityDTO>
{
    public GetCommunityByIdentifierQueryHandler(IRepositoryWrapper repository, IMapper mapper) : base(repository, mapper)
    {
    }

    public override async Task<CommunityDTO> Handle(GetCommunityByIdentifierQuery request, CancellationToken cancellationToken)
    {
        var community = await _repository.Community.GetCommunityByIdentifierAsync(request.Identifier)
            ?? throw new EntityNotFoundException();

        return _mapper.Map<CommunityDTO>(community);
    }
}
