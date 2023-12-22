import { Component, Input, OnInit } from '@angular/core';
import { PostLayout } from '../../common/enums/post-layout';
import { Store } from '@ngrx/store';
import { Post } from '../../common/models/post.models';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private store: Store){}

  @Input() postLayout: PostLayout = PostLayout.Card;
  @Input() post!: Post;

  ngOnInit(): void {
  }


}
