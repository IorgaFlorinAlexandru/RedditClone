using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Common.Exceptions;
using Application.Common.Models;
using Application.Posts.Commands.CreatePost;
using Application.Posts.Commands.DeletePost;
using Application.Posts.Commands.EditPost;
using Application.Posts.Commands.VotePost;
using Application.Posts.Queries;
using Application.Posts.Queries.GetPostById;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class PostController : ApiControllerBase
    {
        // GET: api/values
        [HttpGet]
        public async Task<ActionResult<Post[]>> Get()
        {
            try
            {
                var posts = await Mediator.Send(new GetAllPostsQuery());

                return posts;
            }
            catch(Exception e)
            {
                Logger.LogError(e);
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PostDTO>> Get(int id)
        {
            try
            {
                var post = await Mediator.Send(new GetPostByIdQuery { Id = id });

                return Ok(post);
            }
            catch(NotFoundException e)
            {
                Logger.LogInfo(e.Message);
                return NotFound(e.Message);
            }
            catch(Exception e)
            {
                Logger.LogError($"Crashed when trying to get a post with Id: {id}\n",e);
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }

        // POST api/values
        [HttpPost]
        public async Task<ActionResult<RequestResponse>> Post([FromBody]CreatePostCommand command)
        {
            try
            {
                var id = await Mediator.Send(command);

                return StatusCode(201, new RequestResponse(true, $"A new post has been created.", id));
            }
            catch(ValidationException e)
            {
                Logger.LogInfo(e.Message);
                return BadRequest(new RequestResponse(e.Message, e.Errors));
            }
            catch (Exception e)
            {
                Logger.LogError(e);
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<ActionResult<RequestResponse>> Put(int id, [FromBody]EditPostCommand command)
        {
            try
            {
                command.Id = id;

                await Mediator.Send(command);

                return Ok(new RequestResponse(true, "The post has been successfully modified",id));
            }
            catch(ValidationException e)
            {
                Logger.LogInfo(e.Message);
                return BadRequest(new RequestResponse(e.Message, e.Errors));
            }
            catch(NotFoundException e)
            {
                Logger.LogInfo(e.Message);
                return NotFound(e.Message);
            }
            catch(Exception e)
            {
                Logger.LogError(e);
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RequestResponse>> Delete(int id)
        {
            try
            {
                await Mediator.Send(new DeletePostCommand { Id = id });

                return Ok(new RequestResponse(true, "The post has been deleted."));
            }
            catch(NotFoundException e)
            {
                Logger.LogInfo(e.Message);
                return NotFound(e.Message);
            }
            catch(Exception e)
            {
                Logger.LogError(e);
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }

        //TODO Create command for remove post
        [HttpDelete("remove/{id}")]
        public async Task<ActionResult<RequestResponse>> Remove(int id)
        {
            try
            {
                await Mediator.Send(new DeletePostCommand { Id = id });

                return Ok(new RequestResponse(true, "The post has been deleted."));
            }
            catch (NotFoundException e)
            {
                Logger.LogInfo(e.Message);
                return NotFound(e.Message);
            }
            catch (Exception e)
            {
                Logger.LogError(e);
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }

        [HttpPost("vote")]
        public async Task<ActionResult<RequestResponse>> VotePost([FromBody] VotePostCommand command)
        {
            try
            {
                await Mediator.Send(command);

                return Ok();
            }
            catch(ValidationException e)
            {
                Logger.LogInfo(e.Message);
                return BadRequest(new RequestResponse("", e.Errors));
            }
            catch(Exception e)
            {
                Logger.LogError(e);
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }

        }
    }
}

