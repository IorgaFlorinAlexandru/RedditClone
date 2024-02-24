import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Post } from '../common/models/post.models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CreatePostRequest } from 'src/app/submit-post/common/models/create-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(feed?: string, community?: string): Observable<Post[]> {
    let params = new HttpParams();
    if(feed) params = params.append("feed",feed);
    if(community) params = params.append("community",community);

    return this.http.get<Post[]>('/api/post',{ params }).pipe(
      delay(200000)
    );
  }
  
  public createPost(request: CreatePostRequest): Observable<string> {
    return this.http.post<string>('/api/post', request);
  }
}
