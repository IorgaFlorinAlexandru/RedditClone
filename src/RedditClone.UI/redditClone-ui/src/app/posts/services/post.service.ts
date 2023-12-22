import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Post } from '../common/models/post.models';
import { HttpClient } from '@angular/common/http';
import { CreatePostRequest } from 'src/app/submit-post/common/models/create-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/post').pipe(
      delay(2000)
    );
  }
  
  public createPost(request: CreatePostRequest): Observable<string> {
    return this.http.post<string>('/api/post', request);
  }
}
