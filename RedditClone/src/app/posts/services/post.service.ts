import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpEndpoints } from 'src/app/shared/common/enums/http-endpoints';
import { HttpMethods } from 'src/app/shared/common/enums/http-methods';
import { HttpService } from 'src/app/shared/services/http.service';
import { CreatePostData } from '../common/models/request-models/create-post-data';
import { Post } from '../common/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpService: HttpService) { }

  getPosts() : Observable<Post[]> {
    return this.httpService.makeHttpCall(HttpEndpoints.GetPosts,HttpMethods.GET);
  }

  createPost(data : CreatePostData) : Observable<number>{
    return this.httpService.makeHttpCall(HttpEndpoints.CreatePost,HttpMethods.POST,data);
  }

  getPostsBySubreddit(subredditId: number) : Observable<Post[]> {
    return this.httpService.makeHttpCall(HttpEndpoints.GetPostsBySubreddit,HttpMethods.GET,subredditId);
  }
}
