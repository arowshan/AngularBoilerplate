import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "../../services/apis/api.service";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth-guard/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl("/home");
    }
    this.form = this.formBuilder.group({
      usernameOrEmail: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  onSubmit(form) {
    this.authService.login(form).subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl
          ? this.authService.redirectUrl
          : "/home";

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
}
