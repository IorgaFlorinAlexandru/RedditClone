using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Common.Models;
using Application.Users.Commands;
using Application.Users.Commands.CreateUser;
using Application.Users.Commands.LogInUser;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
	public class UserController : ApiControllerBase
	{
        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult<string>> Register([FromBody] CreateUserCommand command)
        {
            try
            {
                var userId = await Mediator.Send(command);

                return Created(string.Empty, userId); // What is uri used for
            }
            catch (UnsuccessfulRequestException e)
            {
                Logger.LogInfo(e.Message);
                return StatusCode(400, e.Message);
            }
            catch (Exception e)
            {
                Logger.LogError(e);
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }

        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<string>> Login([FromBody] LoginUserCommand command)
        {
            try
            {
                var token = await Mediator.Send(command);

                return Ok(new { token });
            }
            catch (UserNotFoundException e)
            {
                Logger.LogInfo(e.ERROR_MESSAGE,e);
                return StatusCode(400, e.ERROR_MESSAGE);
            }
            catch (WrongPasswordException e)
            {
                Logger.LogInfo(e.Message);
                return StatusCode(400, e.Message);
            }
            catch (Exception e)
            {
                Logger.LogError(e);
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }
    }
}

