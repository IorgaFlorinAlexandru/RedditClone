import { PostType } from "src/app/posts/common/enums/post.enums";

export const FormParamToPostTypeMap: Map<string,PostType> = new Map([
    ['',PostType.TEXT],
    ['media',PostType.MEDIA],
    ['url',PostType.LINK],
])