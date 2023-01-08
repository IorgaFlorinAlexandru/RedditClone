using System;
namespace Application.Common.Interfaces
{
	public interface ILoggingService
	{
        public void LogError(string message, Exception e);
        public void LogError(string message);
        public void LogError(Exception e);

        public void LogInfo(string message, Exception e);
        public void LogInfo(string message);
        public void LogInfo(Exception e);


        public void LogWarning(string message, Exception e);
        public void LogWarning(string message);
        public void LogWarning(Exception e);
    }
}

