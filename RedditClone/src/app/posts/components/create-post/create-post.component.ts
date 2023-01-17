import { Component, ViewChild } from '@angular/core';
import { CreatePostData } from '../../common/models/request-models/create-post-data';
import { PostService } from '../../services/post.service';
import { LinkFormComponent } from '../link-form/link-form.component';
import { MediaFormComponent } from '../media-form/media-form.component';
import { TextFormComponent } from '../text-form/text-form.component';

@Component({
  selector: 'CreatePost',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {

  constructor(private postService: PostService){}
  //TODO REWRITE BETTER LOGIC FLOW
  @ViewChild("textForm") textForm!: TextFormComponent | undefined;
  @ViewChild("mediaForm") mediaForm!: MediaFormComponent | undefined;
  @ViewChild("linkForm") linkForm : LinkFormComponent | undefined;

  formActiveBools : boolean[] = [true,false,false]

  // - Changes the visible form in comp
  //   - Sets all bools to false with "fill" method
  //    - Then only one value for the wanted form is changed to true
  changeForm(value : number){
    this.formActiveBools.fill(false);
    this.formActiveBools[value] = true;
  }


  createPost(data : CreatePostData){
    console.log(data);
  }

  post(){
    if(this.textForm != undefined)
      // this.postService.createPost(this.textForm.textPostForm).subscribe({
      //   next: (response) => console.log(response),
      //   error: (error) => console.log(error)
      // });
    if(this.mediaForm != undefined)
      console.log(this.mediaForm.mediaFormData);
    if(this.linkForm != undefined)
      console.log(this.linkForm.linkFormData);
  }
}
