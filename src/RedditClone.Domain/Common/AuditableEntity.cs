namespace RedditClone.Domain.Common
{
    public abstract class AuditableEntity<T> : Entity<T>
    {
        public DateTime Created { get; set; }
        public string CreatedBy { get; set; } = string.Empty;
        public DateTime? LastUpdated { get; set; } 
        public string? LastUpdatedBy { get; set; }
    }
}
