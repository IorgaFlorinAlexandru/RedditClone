using Microsoft.AspNetCore.Mvc;
using RedditClone.Application;
using RedditClone.Application.Common.DataTransferObjects;
using RedditClone.Application.Communities.Commands.ChangeDescription;
using RedditClone.Application.Communities.Commands.ChangeTitle;
using RedditClone.Application.Communities.Commands.CreateCommunity;
using RedditClone.Application.Communities.Commands.DeleteCommunity;
using RedditClone.Application.Communities.Commands.EditCommunity;
using RedditClone.Application.Communities.Queries.GetAllCommunities;
using RedditClone.Application.Communities.Queries.GetCommunitiesIds;
using RedditClone.Application.Communities.Queries.GetCommunityPosts;
using RedditClone.Domain.Entities;

namespace RedditClone.Api.Controllers
{
    public sealed class CommunityController : ApiControllerBase
    {
        [HttpGet("identifiers")]
        public async Task<ActionResult<List<CommunityIdDTO>>> GetIds()
        {
            return Ok(await Mediator.Send(new GetCommunityIdsQuery()));
        }

        [HttpGet]
        public async Task<ActionResult<List<CommunityDTO>>> Get()
        {
            return Ok(await Mediator.Send(new GetAllCommunitiesQuery()));
        }

        [HttpGet("{identifier}")]
        public async Task<ActionResult<CommunityDTO>> GetCommunity(string identifier)
        {
            return Ok(await Mediator.Send(new GetCommunityByIdentifierQuery { Identifier = identifier }));
        }

        [HttpGet("{identifier}/posts")]
        public void GetCommunityPosts(string identifier) 
        {
            
        }

        [HttpPost] //TODO Look into Created, CreatedAtAction, CreatedAtRoute
        public async Task<ActionResult<Community>> Post(CreateCommunityCommand command)
        {
            var communityId = await Mediator.Send(command);

            return Ok(await Mediator.Send(new GetCommunityByIdentifierQuery { Identifier = communityId.ToString() }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, EditCommunityCommand command)
        {
            command.Id = id;

            await Mediator.Send(command);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await Mediator.Send(new DeleteCommunityCommand { Id = id });

            return Ok();
        }

        [HttpPost("{id}/description")]
        public async Task<IActionResult> ChangeDescription(Guid id, ChangeDescriptionCommand command)
        {
            command.Id = id;
            
            await Mediator.Send(command);

            return Ok();
        }

        [HttpPost("{id}/title")]
        public async Task<IActionResult> ChangeTitle(Guid id, ChangeTitleCommand command)
        {
            command.Id = id;

            await Mediator.Send(command);

            return Ok();
        }

        [HttpGet("{id}/posts")]
        public async Task<ActionResult<List<PostDTO>>> GetPosts(Guid id)
        {
            return Ok(await Mediator.Send(new GetCommunityPostsQuery { Id = id}));
        }
    }
}
