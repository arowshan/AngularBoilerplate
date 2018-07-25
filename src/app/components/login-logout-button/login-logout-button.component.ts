import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth-guard/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-logout-button",
  templateUrl: "./login-logout-button.component.html",
  styleUrls: ["./login-logout-button.component.scss"]
})
export class LoginLogoutButtonComponent implements OnInit {
  // Initialize to auth.service value of loggedIn
  isLoggedIn = this.authService.isLoggedIn;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // listen for changes to isLoggedIn of auth.service
    this.authService.isLoggedInEmitter.subscribe(res => {
      this.isLoggedIn = res;
    });
  }

  // sends user to sign in page
  // login button only renders if user is not logged in
  login() {
    this.router.navigateByUrl("/signin");
  }

  logout() {
    this.authService.logout().subscribe(
      res => {
        this.isLoggedIn = res;
      },
      error => {
        alert("An error occured");
      }
    );
  }
}
