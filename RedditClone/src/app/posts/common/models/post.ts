export interface Post{
     id : number;
     title : string;
     originalPoster : string;
     createdAt : string;
     commentsCount : number;
     upvotesCount : number;
     content : Content;
     community : Community;
}

export interface Content{
     id: number;
     content: string;
}

export interface Community{
     id: number;
     name: string;
     icon: string;
}