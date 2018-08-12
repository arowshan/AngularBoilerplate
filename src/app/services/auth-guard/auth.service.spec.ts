import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { SigninComponent } from '../../components/signin/signin.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

class MockAuthService extends AuthService {
  isAuthenticated() {
    return 'Mocked';
  }
}

describe('AuthService', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let testBedService: AuthService;
  let componentService: AuthService;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SigninComponent],
      providers: [AuthService, FormBuilder],
      imports: [HttpClientModule, RouterTestingModule]
    });

    // Configure the component with another set of Providers
    TestBed.overrideComponent(SigninComponent, {
      set: { providers: [{ provide: AuthService, useClass: MockAuthService }] }
    });

    // create component and test fixture
    fixture = TestBed.createComponent(SigninComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // AuthService provided to the TestBed
    testBedService = TestBed.get(AuthService);

    // AuthService provided by Component, (should return MockAuthService)
    componentService = fixture.debugElement.injector.get(AuthService);
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [AuthService],
    (injectService: AuthService) => {
      expect(injectService).toBe(testBedService);
    }
  ));

  it('Service injected via component should be and instance of MockAuthService', () => {
    expect(componentService instanceof MockAuthService).toBeTruthy();
  });

  it('Should not be authenticated by default', () => {
    expect(componentService.isLoggedIn).toBeFalsy();
  });

  it('Should return a false value for users authentication state after user logs out', (done: DoneFn) => {
    componentService.logout().subscribe(value => {
      expect(value).toEqual(false);
      done();
    });
  });

  it('Should take a login form and return authentication status', (done: DoneFn) => {
    const form = {
      accessToken: 'secret',
      success: true
    };
    componentService.login(form).subscribe(value => {
      expect(typeof value).toEqual('object');
      done();
    });
  });
});
