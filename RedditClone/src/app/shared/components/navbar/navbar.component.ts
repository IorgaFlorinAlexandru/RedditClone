import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [ CommonModule ],
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAuthenticated : boolean = false;
}
