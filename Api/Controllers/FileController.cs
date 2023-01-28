using Api.Services;
using Application.Common.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/file")]
	public class FileController : ApiControllerBase
	{
        private readonly IFileService _fileService;

        public FileController(IFileService fileService)
        {
            _fileService = fileService;
        }


        [HttpPost("upload")]
        public async Task<ActionResult<string>> UploadFile(IFormFile file)
        {
            try
            {
                string path;
                using (var stream = new MemoryStream())
                {
                    await file.CopyToAsync(stream);
                    var bytes = stream.ToArray();
                    path = _fileService.SaveFileToDisk(file.FileName,bytes);
                }

                return Ok(path);
            }
            catch(Exception e)
            {
                return HandleException(e);
            }
        }

        [HttpPost("multipart/upload")]
        public async Task<ActionResult<string>> UploadFile()
        {
            await Task.Delay(1);
            throw new NotImplementedException();
        }
    }
}

