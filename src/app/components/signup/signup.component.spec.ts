import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../../services/auth-guard/auth.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../../services/apis/api.service';
import { Observable, of } from 'rxjs';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let apiService: ApiService;
  let authService: AuthService;

  class MockAuthService {
    isLoggedIn = true;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    apiService = TestBed.get(ApiService);
    authService = TestBed.get(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form as invalid initially/when empty due to required fields', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should see email field as invalid when empty', () => {
    const email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();
  });

  it('should have password as a required field', () => {
    let errors = {};
    const password = component.form.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should call the signup in api service on form submission', () => {
    const form = {};
    // create a spy to watch sign up method of api service
    // api service from Test Bed
    const spy = spyOn(apiService, 'signup').and.returnValue(of(form));
    component.onSubmit(form);
    expect(spy).toHaveBeenCalled();
  });

  it('should call the signup in api service on form submission', () => {
    const form = {};
    // create a spy to watch sign up method of api service
    // api service from Test Bed
    const spy = spyOn(apiService, 'signup').and.returnValue(of(form));
    component.onSubmit(form);
    expect(spy).toHaveBeenCalled();
  });

  it('should navigate to signin page after signing up', () => {
    const form = {};
    const spy = spyOn(apiService, 'signup').and.returnValue(of(form));
    const navigateSpy = spyOn((<any>component).router, 'navigateByUrl');
    component.onSubmit(form);
    expect(navigateSpy).toHaveBeenCalledWith('/signin');
  });

  xit('should navigate to home if user is already logged in', () => {
    authService.isLoggedIn = true;
    component.ngOnInit();
    const navigateSpy = spyOn((<any>component).router, 'navigateByUrl');
    expect(navigateSpy).toHaveBeenCalledWith('/signin');
  });
});
