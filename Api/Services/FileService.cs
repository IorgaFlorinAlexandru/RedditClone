using System;
using Application.Common.Interfaces;

namespace Api.Services
{
	public sealed class FileService
	{
        const string directoryPath = "/Users/alexandru/Desktop/Projects/RedditClone/UploadedFiles";
        public async Task<string> SaveImageToDisk(IFormFile file)
        {
            string extension = CheckFileExtension(file.FileName);
            string filePath = Path.Combine(directoryPath
                , Guid.NewGuid().ToString() + extension);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return filePath;
        }

        public bool CheckIfFileExists(string path)
        {
            string filePath = Path.Combine(directoryPath, path);
            return File.Exists(filePath);
        }

        private string CheckFileExtension(string fileName)
        {
            return Path.GetExtension(fileName);
        }
    }
}

