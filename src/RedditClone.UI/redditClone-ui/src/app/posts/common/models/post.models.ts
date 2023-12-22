import { PostType } from "../enums/post.enums";

export interface Post { 
    id: string;
    title: string;
    postType: PostType;
    content: string;
    createdAt: Date;
    originalPoster: string;
    community: string;
}