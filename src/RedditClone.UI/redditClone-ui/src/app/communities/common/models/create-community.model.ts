import { CommunityType } from "../enums/communities.enums";

export interface CreateCommunityRequest {
    name: string;
    communityType: CommunityType;
    isNsfw: boolean;
}