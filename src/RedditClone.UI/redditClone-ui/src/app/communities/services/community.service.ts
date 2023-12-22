import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Community } from '../common/models/communities.models';
import { Observable, delay } from 'rxjs';

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
      delay(2000)
    )
  }
}
