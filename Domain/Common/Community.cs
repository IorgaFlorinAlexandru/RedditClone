using System;
using System.ComponentModel.DataAnnotations.Schema;
using Domain.Entities;
using Domain.Interfaces;

namespace Domain.Common
{
    public abstract class Community 
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; } = string.Empty;
        public virtual ICollection<Post> CommunityPosts { get; set; }
    }
}

