import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/apis/api.service';
import { AuthService } from '../../services/auth-guard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  errors = [];
  title = 'Demo App';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl('/home');
    }
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(form) {
    this.apiService.signup(form.value).subscribe(
      res => {
        this.router.navigateByUrl('/signin');
      },
      err => {
        this.errors = err.error.errors;
      }
    );
  }
}
