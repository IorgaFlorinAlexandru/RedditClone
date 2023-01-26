using System;
using Application.Common.Interfaces;

namespace Api.Services
{
	public sealed class ImageService
	{
        public async Task<string> SaveImageToDisk(IFormFile file)
        {
            string directoryPath = "/Users/alexandru/Desktop/Projects/RedditClone/UploadedFiles";
            string extension = CheckFileExtension(file.FileName);
            string filePath = Path.Combine(directoryPath
                , Guid.NewGuid().ToString() + extension);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return filePath;
        }

        private string CheckFileExtension(string fileName)
        {
            return Path.GetExtension(fileName);
        }
    }
}

