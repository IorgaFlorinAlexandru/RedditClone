using System;
using Application.Common.Interfaces;

namespace Api.Services
{
	public class ImageService : IImageService
	{
        public async Task<string> SaveImageToDisk()
        {
            await Task.Delay(300);
            return "path";
        }
    }
}

