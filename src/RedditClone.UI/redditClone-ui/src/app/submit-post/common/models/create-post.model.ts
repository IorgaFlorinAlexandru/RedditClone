import { PostType } from "src/app/posts/common/enums/post.enums";

export interface CreatePostRequest {
    title: string;
    contentType: PostType;
    content: string;
    communityId: string;
}