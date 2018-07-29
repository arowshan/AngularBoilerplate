import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/apis/api.service';
import { AuthService } from '../../services/auth-guard/auth.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss']
})
export class GenericFormComponent implements OnInit {
  form: FormGroup;

  // File Upload
  fileToUpload: File = null;

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
      email: ['', [Validators.email]],
      comments: [''],
      state: [''],
      phoneNumber: ['', [Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
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

  handleFileInput(files: FileList) {
    console.log(files);
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.apiService.uploadFile(this.fileToUpload).subscribe(
      data => {
        // do something, if upload success
      },
      error => {
        console.log(error);
      }
    );
  }
}
