import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;


 
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
   });
  }

}
