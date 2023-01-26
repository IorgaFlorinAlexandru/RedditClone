using Api.Services;
using Application.Common.Interfaces;
using Application.Common.Models;
using Application.Posts.Commands.CreateImagePost;
using Application.Posts.Commands.CreateLinkPost;
using Application.Posts.Commands.CreatePost;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/submitPost")]
    public class CreatePostController : ApiControllerBase
	{

        private readonly ImageService _imageService;
        public CreatePostController(ImageService imageService)
        {
            _imageService = imageService;
        }

       [HttpPost()]
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

        [HttpPost("link")]
        public async Task<ActionResult<RequestResponse>> Post([FromBody] CreateLinkPostCommand command)
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

        [HttpPost("image")]
        public async Task<ActionResult<RequestResponse>> Post([FromBody] CreateImagePostCommand command)
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

