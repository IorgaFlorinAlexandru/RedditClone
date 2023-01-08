using Application.Common.Models;
using Application.Subreddits.Commands.CreateSubreddit;
using Application.Subreddits.Commands.DeleteSubreddit;
using Application.Subreddits.Commands.EditSubreddit;
using Application.Subreddits.Queries;
using Application.Subreddits.Queries.GetSubredditById;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class SubredditsController : ApiControllerBase
	{
		[HttpGet]
		public async Task<ActionResult<SubredditDTO[]>> Get()
		{
			try
			{
				return Ok(await Mediator.Send(new GetAllSubredditsQuery()));
			}
			catch(Exception e)
			{
				return HandleException(e);
			}
		}

        [HttpGet("{id}")]
        public async Task<ActionResult<SubredditDTO>> Get(int id)
        {
            try
            {
                return Ok(await Mediator.Send(new GetSubredditByIdQuery { Id = id}));
            }
            catch (Exception e)
            {
                return HandleException(e);
            }
        }

		[HttpPost]
		public async Task<ActionResult<RequestResponse>> Post([FromBody]CreateSubredditCommand command)
		{
			try
			{
				var id = await Mediator.Send(command);

				return StatusCode(201, new RequestResponse(true, "Subreddit has been created.", id));
			}
			catch(Exception e)
			{
				return HandleException(e);
			}
		}

		[HttpPut]
		public async Task<ActionResult<RequestResponse>> Put([FromBody]EditSubredditCommand commnad)
		{
			try
			{
				await Mediator.Send(commnad);

				return Ok(new RequestResponse(true, "Subreddit has been edited"));
			}
			catch(Exception e)
			{
				return HandleException(e);
			}
		}

		[HttpDelete("{id}")]
		public async Task<ActionResult<RequestResponse>> Delete(int id)
		{
			try
			{
				await Mediator.Send(new DeleteSubredditCommand { Id = id });

				return Ok(new RequestResponse(true, "Subreddit has been deleted."));
			}
			catch(Exception e)
			{
				return HandleException(e);
			}
		}
    }
}

