import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PostLayout } from 'src/app/posts/common/enums/post-layout';

@Directive({
  selector: '[dynamicSkeletonLoader]',
})
export class DynamicSkeletonLoaderDirective implements OnInit {

  private _layout: PostLayout = PostLayout.Card;
  @Input('dynamicSkeletonLoader') set dynamicSkeletonLoaderLayout(value: PostLayout){
    this._layout = value;
  }

  private CARD_SIZE = 428;
  private CLASSIC_SIZE = 102;
  private COMPACT_SIZE = 34;
  private SIZE_MAP: Map<PostLayout,number> = new Map([
    [PostLayout.Card, this.CARD_SIZE],
    [PostLayout.Classic, this.CLASSIC_SIZE],
    [PostLayout.Compact, this.COMPACT_SIZE],
  ])

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef,
    ) { }

  ngOnInit(): void {
    this.loadDynamicSkeletonComponents();
  }

  private loadDynamicSkeletonComponents(): void {
    const clientHeight = document.body.clientHeight - 300;
    const size = this.SIZE_MAP.get(this._layout) ?? this.CARD_SIZE;
    const count = Math.round(clientHeight/size);

    for(let i = 0; i < count; i++){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}