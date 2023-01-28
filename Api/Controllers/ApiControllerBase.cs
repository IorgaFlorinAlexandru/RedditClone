using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Application.Common.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class ApiControllerBase : Controller
    {
        protected const string SERVER_ERROR_MESSAGE = "There has been a server error.";

        private ISender _mediator = null!;

        protected ISender Mediator => _mediator ??= HttpContext.RequestServices.GetRequiredService<ISender>();

        private ILoggingService _logger = null!;

        protected ILoggingService Logger => _logger ??= HttpContext.RequestServices.GetRequiredService<ILoggingService>();

        protected ActionResult HandleException(Exception e)
        {
            switch (e)
            {
                case ValidationException:
                    Logger.LogInfo(e.Message);
                    var ex = e as ValidationException;
                    return BadRequest(new RequestResponse(ex!.Message,ex.Errors));
                case NotFoundException:
                    Logger.LogInfo(e.Message);
                    return BadRequest(e.Message);
                case WrongFileFormatException:
                    Logger.LogInfo(e.Message);
                    return BadRequest(e.Message);
                case FileNotFoundException:
                    return BadRequest("File has not been found.");
                default:
                    Logger.LogError(e);
                    return StatusCode((int)HttpStatusCode.InternalServerError, SERVER_ERROR_MESSAGE);
            }
        }
    }
}

