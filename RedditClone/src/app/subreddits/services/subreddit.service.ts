import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpEndpoints } from 'src/app/shared/common/enums/http-endpoints';
import { HttpMethods } from 'src/app/shared/common/enums/http-methods';
import { HttpService } from 'src/app/shared/services/http.service';
import { Subreddit } from '../common/models/subreddit';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  constructor(private httpService: HttpService) { }

  getSubreddit(id: number) : Observable<Subreddit> {
    return this.httpService.makeHttpCall(HttpEndpoints.GetSubreddit,HttpMethods.GET,id);
  }

  editDescription(data: any) : Observable<any> {
    return this.httpService.makeHttpCall(HttpEndpoints.EditSubredditDescription,HttpMethods.PUT,data).pipe(
      map(
        (response) => {console.log(response)}
      )
    );
  }
}
