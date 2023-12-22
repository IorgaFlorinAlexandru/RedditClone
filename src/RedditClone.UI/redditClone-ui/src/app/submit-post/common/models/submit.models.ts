import { PostType } from "src/app/posts/common/enums/post.enums";

export interface SubmitFormTab {
    postType: PostType;
    icon: string;
    name: string;
    isActive: boolean;
    disabled: boolean;
}