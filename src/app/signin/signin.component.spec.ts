import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../auth-guard/auth.service';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let spy: any;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AuthService, FormBuilder],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form as invalid initially/when empty due to required fields', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should see password field as invalid when empty', () => {
    const password = component.form.controls['password'];
    expect(password.valid).toBeFalsy();
  });

  it('should have password as a required field', () => {
    let errors = {};
    const password = component.form.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should see password field as invalid when empty', () => {
    const password = component.form.controls['password'];
    expect(password.valid).toBeFalsy();
  });
});
