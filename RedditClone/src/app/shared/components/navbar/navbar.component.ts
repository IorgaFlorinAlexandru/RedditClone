import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthModule } from 'src/app/auth/auth.module';

@Component({
  imports: [ CommonModule, AuthModule ],
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAuthenticated : boolean = false;
}
