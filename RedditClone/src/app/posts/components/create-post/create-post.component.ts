import { Component } from '@angular/core';

@Component({
  selector: 'CreatePost',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {


  formActiveBools : boolean[] = [true,false,false]

  // - Changes the visible form in comp
  //   - Sets all bools to false with "fill" method
  //    - Then only one value for the wanted form is changed to true
  changeForm(value : number){
    this.formActiveBools.fill(false);

    this.formActiveBools[value] = true;
  }
}
