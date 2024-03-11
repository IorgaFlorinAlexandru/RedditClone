import { PostLayout } from "src/app/posts/common/enums/post-layout";


const POST_LAYOUT_KEY = 'postLayout';


export function saveLayoutToLocalStorage(layout: PostLayout) {
    localStorage.setItem(POST_LAYOUT_KEY, layout);
}

export function getLayoutFromLocalStorage(): PostLayout {
    const layout = localStorage.getItem(POST_LAYOUT_KEY) as PostLayout ?? PostLayout.Card;

    return layout;
}