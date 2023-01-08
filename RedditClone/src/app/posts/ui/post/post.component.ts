import { Component, Input } from '@angular/core';
import { Post } from '../../common/models/post';

@Component({
  selector: 'Post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {

  @Input() post! : Post;
}
