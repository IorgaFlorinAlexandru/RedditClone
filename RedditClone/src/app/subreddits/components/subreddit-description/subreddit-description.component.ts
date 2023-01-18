import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'subreddit-description',
  templateUrl: './subreddit-description.component.html',
  styleUrls: ['./subreddit-description.component.css']
})
export class SubredditDescriptionComponent{

  @ViewChild("editInput",{static: false}) editInput! : ElementRef;
  @Input() description : string  = "";

  editDescription: boolean = false;

  changeTemplate(){
    this.editDescription = !this.editDescription;
    setTimeout(() => this.editInput.nativeElement.focus(), 0);  }
}
