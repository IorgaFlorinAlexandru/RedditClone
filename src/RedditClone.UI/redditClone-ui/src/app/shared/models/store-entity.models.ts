import { RequestStatus } from "../enums/status.enum";

export interface StateEntity<T> {
    data: T;
    status: RequestStatus;
}

export interface StateRequestEntity<T> {
    response: T;
    status: RequestStatus;
}