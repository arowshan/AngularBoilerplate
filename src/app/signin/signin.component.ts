import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../apis/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth-guard/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    public authService: AuthService, 
    public router: Router, 
    private formBuilder: FormBuilder, 
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      usernameOrEmail: ['', [Validators.required]],
      password: ['', [Validators.required]],
   });
  }

  onSigninSubmit(signinForm) {
    this.apiService.signin(signinForm).subscribe(res => console.log(res));
  }

  signin() {
    this.authService.login().subscribe(() => {

      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
 
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
 
  singout() {
    this.authService.logout();
  }

}
