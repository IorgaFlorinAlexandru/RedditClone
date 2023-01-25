using Application.Common.Models;
using Application.Posts.Commands.CreateLinkPost;
using Application.Posts.Commands.CreatePost;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
	public class CreatePostController : ApiControllerBase
	{
       [HttpPost]
        public async Task<ActionResult<RequestResponse>> Post([FromBody] CreatePostCommand command)
        {
            try
            {
                var id = await Mediator.Send(command);

                return StatusCode(201, new RequestResponse(true, $"A new post has been created."));
            }
            catch (Exception e)
            {
                return HandleException(e);
            }
        }

        [HttpPost("submit")]
        public async Task<ActionResult<RequestResponse>> Postt([FromBody] CreateLinkPostCommand command)
        {
            try
            {
                var id = await Mediator.Send(command);

                return StatusCode(201, new RequestResponse(true, $"A new post has been created."));
            }
            catch (Exception e)
            {
                return HandleException(e);
            }
        }
    }
}

