import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../apis/api.service';
import { AuthService } from '../auth-guard/auth.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      country: ['', [Validators.required]],
      comments: [''],
      state: [''],
      isCitizen: [true],
      date: ['']
    });
  }

  onSubmit(form) {
    console.log(form);

    // Moment.js example
    console.log(moment(this.form.value.date).format('MMMM Do YYYY, h:mm:ss a'));

    // Programmatically change input value
    this.form.controls.name.setValue('example');
  }
}
