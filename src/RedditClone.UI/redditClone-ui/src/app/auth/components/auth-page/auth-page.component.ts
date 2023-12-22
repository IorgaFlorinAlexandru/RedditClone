import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFormRoutes } from '../../common/enums/auth.enums';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{

  constructor(private router: Router) {}

  public route = AuthFormRoutes.LOGIN;

  ngOnInit(): void {
    this.route = this.router.url.replace('/','') as AuthFormRoutes;
  }

}
