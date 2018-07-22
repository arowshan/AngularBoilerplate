import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-guard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-logout-button',
  templateUrl: './login-logout-button.component.html',
  styleUrls: ['./login-logout-button.component.scss']
})
export class LoginLogoutButtonComponent implements OnInit {

  isLoggedIn = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isLoggedInEmitter.subscribe(res => this.isLoggedIn = res);
  }

  login() {
    this.router.navigateByUrl('/signin');
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.isLoggedIn = res;
      alert('logged out successfully');
    },
    error => {
      alert('An error occured');
    }
  );
  }



}
