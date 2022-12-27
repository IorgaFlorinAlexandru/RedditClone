using Application.Common.Interfaces;
using NLog;

namespace Api.Services
{
    public class NlogService : ILoggingService
    {
        private readonly Logger fileLogger = LogManager.GetLogger("FileLoggerRule");
        //private readonly Logger consoleLogger = LogManager.GetLogger("ConsoleLoggerRule");

        public void LogError(string message, Exception e)
        {
            fileLogger.Error(e,message); //Exception first then message
            //consoleLogger.Error(e,message); //TODO ONLY ON DEVELOPMENT MODE
        }

        public void LogError(string message)
        {
            fileLogger.Error(message);
            //consoleLogger.Error(message);
        }

        public void LogError(Exception e)
        {
            fileLogger.Error(e);
        }

        public void LogInfo(string message, Exception e)
        {
            fileLogger.Info(e,message);
        }

        public void LogInfo(string message)
        {
            fileLogger.Info(message);
        }

        public void LogInfo(Exception e)
        {
            fileLogger.Info(e);
        }

        public void LogWarning(string message, Exception e)
        {
            fileLogger.Warn(e,message);
        }

        public void LogWarning(string message)
        {
            fileLogger.Warn(message);
        }

        public void LogWarning(Exception e)
        {
            fileLogger.Warn(e);
        }
    }
}

