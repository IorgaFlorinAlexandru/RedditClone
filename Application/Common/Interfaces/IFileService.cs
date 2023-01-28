using System;
namespace Application.Common.Interfaces
{
	public interface IFileService
	{
        string SaveFileToDisk(string fileName, byte[] bytes);
        bool CheckIfFileExists(string path);
    }
}

