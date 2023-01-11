using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Common.Exceptions;
using Application.Common.Models;
using Application.Posts.Commands.CreatePost;
using Application.Posts.Commands.DeletePost;
using Application.Posts.Commands.EditPost;
using Application.Posts.Queries;
using Application.Posts.Queries.GetPostById;
using Application.Posts.Queries.GetPostsBySubreddit;
using Application.Posts.Queries.GetSortedPosts;
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
                return Ok(await Mediator.Send(new GetAllPostsQuery()));
            }
            catch(Exception e)
            {
                return HandleException(e);
            }
        }

        [HttpGet("getPostsBySubreddit/{id}")]
        public async Task<ActionResult<PostDTO[]>> GetSubredditPosts(int id)
        {
            try
            {
                return Ok(await Mediator.Send(new GetPostsBySubredditQuery { SubredditId = id }));
            }
            catch(Exception e)
            {
                return HandleException(e);
            }
        }

        [HttpGet("getPosts")]
        public async Task<ActionResult<PostDTO[]>> GetPosts()
        {
            try
            {
                return Ok(await Mediator.Send(new GetSortedPostsQuery()));
            }
            catch(Exception e)
            {
                return HandleException(e);
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
            catch(Exception e)
            {
                return HandleException(e);
            }
        }

        // POST api/values
        [HttpPost]
        public async Task<ActionResult<RequestResponse>> Post([FromBody]CreatePostCommand command)
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

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<ActionResult<RequestResponse>> Put(int id, [FromBody]EditPostCommand command)
        {
            try
            {
                command.Id = id;

                await Mediator.Send(command);

                return Ok(new RequestResponse(true, "The post has been successfully modified"));
            }
            catch(Exception e)
            {
                return HandleException(e);
            }
        }

        // DELETE api/values/5
        //TODO Create command for remove post
        [HttpDelete("{id}")]
        public async Task<ActionResult<RequestResponse>> Delete(int id)
        {
            try
            {
                await Mediator.Send(new DeletePostCommand { Id = id });

                return Ok(new RequestResponse(true, "The post has been deleted."));
            }
            catch(Exception e)
            {
                return HandleException(e);
            }
        }


    }
}

