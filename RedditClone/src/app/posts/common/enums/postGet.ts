// export enum PostChoice{
//     Subreddit,
//     User,
//     UserUpvotes,
//     UserSavedPosts,
// }

const PostChoices = ["User", "Subreddit", "Upvotes", "Saved", "Feed"] as const;
type PostChoice = typeof PostChoices[number];


type User = {
    role : PostChoice
}

const u : User = {role: PostChoices[0]};