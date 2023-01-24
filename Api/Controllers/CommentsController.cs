using System;
using Application.Comments.Commands.CreateComment;
using Application.Comments.Commands.DeleteComment;
using Application.Comments.Commands.EditComment;
using Application.Comments.Queries;
using Application.Comments.Queries.GetCommentById;
using Application.Comments.Queries.GetCommentsByPost;
using Application.Common.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
	public class CommentsController : ApiControllerBase
	{
		[HttpGet]
		public async Task<ActionResult<CommentDTO[]>> Get()
		{
			try
			{
				return Ok(await Mediator.Send(new GetAllCommentsQuery()));
			}
			catch(Exception e)
			{
				return HandleException(e);
			}
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<CommentDTO>> Get(int id)
		{
			try
			{
				var comment = await Mediator.Send(new GetCommentByIdQuery { Id = id });

				return Ok(comment);
			}
			catch(Exception e)
			{
				return HandleException(e);
			}
		}


        [HttpGet("getCommentsByPost/{id}")]
        public async Task<ActionResult<CommentDTO>> GetCommentsByPostId(int id)
        {
            try
            {
                var comment = await Mediator.Send(new GetCommentsByPostIdQuery { PostId = id });

                return Ok(comment);
            }
            catch (Exception e)
            {
                return HandleException(e);
            }
        }

        [HttpPost]
		public async Task<ActionResult<RequestResponse>> Post([FromBody] CreateCommentCommand command)
		{
			try
			{
				var id = await Mediator.Send(command);

				return Ok(new RequestResponse(true, "Comment has been created", id));
			}
			catch(Exception e)
			{
				return HandleException(e);
			}
		}

		[HttpPut]
		public async Task<ActionResult<RequestResponse>> Put([FromBody] EditCommentCommand command)
		{
			try
			{
				await Mediator.Send(command);

				return Ok(new RequestResponse(true, "Comment has been edited."));
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
				await Mediator.Send(new DeleteCommentCommand { Id = id });

				return Ok(new RequestResponse(true, "Comment has been deleted."));
			}
			catch(Exception e)
			{
				return HandleException(e);
			}
		}
	}
}

