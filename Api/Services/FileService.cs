using System;
using Application.Common.Exceptions;
using Application.Common.Interfaces;

namespace Api.Services
{
	public sealed class FileService : IFileService
	{
        const string directoryPath = "/Users/alexandru/Desktop/Projects/RedditClone/UploadedFiles";

        public string SaveFileToDisk(string fileName,byte[] bytes)
        {
            string extension = CheckFileExtension(fileName);

            fileName = Guid.NewGuid().ToString() + extension;
            string filePath = Path.Combine(directoryPath, fileName);

            File.WriteAllBytes(filePath, bytes);

            return fileName;
        }

        public bool CheckIfFileExists(string path)
        {
            string filePath = Path.Combine(directoryPath, path);
            return File.Exists(filePath);
        }

        private string CheckFileExtension(string fileName)
        {
            string ext = Path.GetExtension(fileName);

            switch (ext.ToLower())
            {
                case ".jpg":
                case ".jpeg":
                case ".png":
                    return ext;
                default:
                    throw new WrongFileFormatException();
            }
        }
    }
}

