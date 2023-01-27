using System;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/file")]
	public class FileController : ApiControllerBase
	{
        private readonly ImageService _imageService;

        public FileController(ImageService imageService)
        {
            _imageService = imageService;
        }


        [HttpPost("upload")]
        public async Task<ActionResult<string>> UploadFile(IFormFile file)
        {

            string path = await _imageService.SaveImageToDisk(file);

            return Ok(path);
        }

        [HttpPost("multipart/upload")]
        public async Task<ActionResult<string>> UploadFile()
        {
            throw new NotImplementedException();
        }
    }
}

