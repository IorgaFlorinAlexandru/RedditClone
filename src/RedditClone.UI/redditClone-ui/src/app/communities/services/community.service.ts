import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Community } from '../common/models/communities.models';
import { Observable, delay } from 'rxjs';
import { CreateCommunityRequest } from '../common/models/create-community.model';
import { CheckNameUniquenessResponse } from '../common/models/check-name-uniqueness.model';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http: HttpClient) { }

  public getCommunities(): Observable<Community[]> {
    return this.http.get<Community[]>('/api/community');
  }

  public getCommunityByName(communityName: string): Observable<Community> {
    return this.http.get<Community>('api/community/' + communityName).pipe(
      delay(1000)
    )
  }

  public createCommunity(request: CreateCommunityRequest): Observable<Community> {
    return this.http.post<Community>('api/community', request).pipe(
      delay(2000)
    )
  }

  public isNameTaken(name: string): Observable<CheckNameUniquenessResponse> {
    const params = new HttpParams().set('name',name);
    return this.http.get<CheckNameUniquenessResponse>('api/community/check-uniqueness',{ params });
  }
}
