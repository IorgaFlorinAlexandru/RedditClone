import { Component } from '@angular/core';
import { SnackbarService } from '../../modules/snackbar/snackbar.service';
import { MessageType } from '../../modules/snackbar/snackbar';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent {
  constructor(private snackbarService: SnackbarService) {}

  counter = 0;
  testSnackbar(): void {
    this.snackbarService.displaySnackbar(MessageType.INFORMATIONAL,'Hello World' + this.counter);
    this.counter++;
  }
}
