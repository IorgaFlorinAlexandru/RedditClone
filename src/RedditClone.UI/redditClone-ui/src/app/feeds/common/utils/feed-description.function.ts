import { AboutFeed } from "../models/feed.models";

export function getFeedDescriptionMap(): Map<string,AboutFeed> {
    const map = new Map<string,AboutFeed>();

    const homeFeedDescription : AboutFeed = {
        name: 'Home',
        description: 'Your personal Reddit frontpage. Come here to check in with your favorite communities.',
        backgroundImage: 'home-banner@2x.png'
    };;
    const popularFeedDescription : AboutFeed = {
        name: 'Popular',
        description: 'The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.',
        backgroundImage: 'banner@2x.png'
    };
    const allFeedDescription : AboutFeed = {
        name: 'All',
        description: 'The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.',
        backgroundImage: 'banner@2x.png'
    };

    map.set('/',homeFeedDescription);
    map.set('/popular',popularFeedDescription);
    map.set('/all',allFeedDescription);

    return map;
}