using System;
namespace Application.Common.Interfaces
{
	public interface IImageService
	{
		Task<string> SaveImageToDisk();
	}
}

