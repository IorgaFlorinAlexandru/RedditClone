import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { SubredditService } from '../../services/subreddit.service';

@Component({
  selector: 'subreddit-description',
  templateUrl: './subreddit-description.component.html',
  styleUrls: ['./subreddit-description.component.css']
})
export class SubredditDescriptionComponent{

  constructor(private subredditService: SubredditService){}

  @ViewChild("editInput",{static: false}) editInput! : ElementRef;
  @Input() description : string  = "";
  @Input() id : number = 0;

  editDescription: boolean = false;
  loading: boolean = false;
  text : string = this.description;

  changeTemplate(){
    this.editDescription = !this.editDescription;
    this.text = this.description;
    setTimeout(() => this.editInput.nativeElement.focus(), 0);  }

  save(){
    this.loading = true;
    this.subredditService.editDescription({id: this.id,description: this.text}).subscribe({
      next: (response) => {},
      error: (error) => {
        console.log(error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
        this.description = this.text;
        this.text = "";
      }
    })
  }

  ///SET TIMEOUT SO THAT IF SAVE BTN IS CLICKED HAS TIME TO EXECUTE
  focusOut(){
    setTimeout(() => {
      this.editDescription = !this.editDescription;
    }, 90); 
  }
}
