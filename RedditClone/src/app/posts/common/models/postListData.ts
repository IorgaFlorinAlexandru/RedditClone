import { CommunityType } from "../enums/communityType";

export class PostListData{
    constructor(id : number, type: CommunityType){
        this.communityId = id;
        this.community = type;
    }

    community : CommunityType;
    communityId : number;
}