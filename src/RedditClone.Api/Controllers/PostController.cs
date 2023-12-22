using Microsoft.AspNetCore.Mvc;
using RedditClone.Application.Common.DataTransferObjects;
using RedditClone.Application.Posts.Commands.CreatePost;
using RedditClone.Application.Posts.Commands.DeletePost;
using RedditClone.Application.Posts.Commands.EditPost;
using RedditClone.Application.Posts.Queries.GetAllPosts;
using RedditClone.Application.Posts.Queries.GetPostById;

namespace RedditClone.Api.Controllers
{
    public class PostController : ApiControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<Guid>> Post(CreatePostCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        [HttpGet]
        public async Task<ActionResult<List<PostDTO>>> Get()
        {
            return Ok(await Mediator.Send(new GetAllPostsQuery()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(Guid id)
        {
            return Ok(await Mediator.Send(new GetPostByIdQuery { Id = id }));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(Guid id, EditPostCommand command)
        {
            command.Id = id;

            await Mediator.Send(command);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {
            await Mediator.Send(new DeletePostCommand { Id = id });

            return Ok();
        }
    }
}
