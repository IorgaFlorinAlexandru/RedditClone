using System;
using Domain.Common;
using MediatR;

namespace Application.Common.Interfaces
{
	public interface IPostRequest<TResponse> : IRequest<TResponse>
	{
        public int CommunityId { get; set; }

        public CommunityType CommunityType { get; set; }

        public string Title { get; set; }
    }
}

