import { Component } from '@angular/core';

@Component({
  selector: 'reddit-rules',
  templateUrl: './reddit-rules.component.html',
  styleUrls: ['./reddit-rules.component.css']
})
export class RedditRulesComponent {

  rules: string[] = [
    'Remember the human',
    'Behave like you would in real life',
    'Look for the original source of content',
    'Search for duplicates before posting',
    'Read the community\'s rules'
  ]
}
