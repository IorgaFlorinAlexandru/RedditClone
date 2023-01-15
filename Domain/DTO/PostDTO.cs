using System;
using Domain.Entities;
using Domain.Entities.PostEntities;
using Domain.Enums;

namespace Domain.DTO
{
    public interface IPost
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string OriginalPoster { get; set; }
        public DateTime CreatedAt { get; set; }

        public int CommentsCount { get; set; }
        public int UpvotesCount { get; set; }
        /// <summary>
        /// "optionalText": value || "linkUrl": value || "imageId" : value => then get image from backend
        /// </summary>
        public ContentDTO? Content { get; set; }
        public CommunityDTO Community { get; set; }
    }

    public interface IContent
    {
        public int Id { get; set; }
        public ContentType Type { get; set; }
        public string? Content { get; set; }
    }

    public interface ICommunity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Icon { get; set; }
    }

    public sealed class PostDTO : IPost
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string OriginalPoster { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }

        public int CommentsCount { get; set; }
        public int UpvotesCount { get; set; }
        public ContentDTO? Content { get; set; } = null;
        public CommunityDTO Community { get; set; } = null!;
    }

    public sealed class CommunityDTO : ICommunity
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Icon { get; set; } = string.Empty;
    }

    public sealed class ContentDTO : IContent
    {
        public int Id { get; set; }
        public ContentType Type { get; set; }
        public string? Content { get; set; }

        public static string GetContent(PostContent c)
        {
            switch (c.Type)
            {
                case ContentType.Text:
                    var ot = c as OptionalText;
                    return ot!.Text;
                case ContentType.Link:
                    var l = c as Link;
                    return l!.Url;
                case ContentType.Image:
                    return string.Empty;
                default:
                    return string.Empty;
            };
        }
    }
}

