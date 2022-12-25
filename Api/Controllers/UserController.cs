using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Common.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
	public class UserController : ApiControllerBase
	{
        private readonly IIdentityService _identityService;

        public UserController(IIdentityService identityService)
        {
            _identityService = identityService;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult<string>> Register([FromBody] UserRegisterDTO data)
        {
            try
            {
                var userId = await _identityService.RegisterUser(data);

                return Created(string.Empty, userId); // What is uri used for
            }
            catch (UnsuccessfulRequestException e)
            {
                return StatusCode(400, e.Message);
            }
            catch (Exception e)
            {
                //LOG THE DETAILS OF THE EXCEPTION
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }

        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<string>> Login([FromBody] UserLoginDTO data)
        {
            try
            {
                var token = await _identityService.LoginUser(data);

                return Ok(new { token });
            }
            catch (UserNotFoundException e)
            {
                return StatusCode(400, e.ERROR_MESSAGE);
            }
            catch (WrongPasswordException e)
            {
                return StatusCode(400, e.Message);
            }
            catch (Exception e)
            {
                //LOG THE DETAILS OF THE EXCEPTION
                return StatusCode(500, SERVER_ERROR_MESSAGE);
            }
        }
    }
}

