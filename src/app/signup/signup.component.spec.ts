import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from "@angular/core/testing";

import { SignupComponent } from "./signup.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AuthService } from "../auth-guard/auth.service";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { ApiService } from "../apis/api.service";

describe("SignupComponent", () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let apiService: ApiService;

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
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have form as invalid initially/when empty due to required fields", () => {
    expect(component.form.valid).toBeFalsy();
  });

  it("should see email field as invalid when empty", () => {
    const email = component.form.controls["email"];
    expect(email.valid).toBeFalsy();
  });

  it("should have password as a required field", () => {
    let errors = {};
    const password = component.form.controls["password"];
    errors = password.errors || {};
    expect(errors["required"]).toBeTruthy();
  });
});
