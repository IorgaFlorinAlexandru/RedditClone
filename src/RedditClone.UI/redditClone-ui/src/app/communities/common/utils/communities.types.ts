import { RequestStatus } from "src/app/shared/enums/status.enum";
import { Community } from "../models/communities.models";

export type GetCommunityData = { community: Community | undefined, status: RequestStatus };
