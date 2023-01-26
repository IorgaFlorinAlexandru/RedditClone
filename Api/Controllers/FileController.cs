using System;
using Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
	public class FileController : ApiControllerBase
	{
        private readonly ImageService _imageService;

        public FileController(ImageService imageService)
        {
            _imageService = imageService;
        }


        [HttpPost("upload")]
        public async Task<ActionResult> UploadFile(IFormFile file)
        {

            string path = await _imageService.SaveImageToDisk(file);

            return Ok(path);
        }
    }
}

