import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginLogoutButtonComponent } from "./login-logout-button.component";
import { AuthService } from "../auth-guard/auth.service";
import { FormBuilder } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("LoginLogoutButtonComponent", () => {
  let component: LoginLogoutButtonComponent;
  let fixture: ComponentFixture<LoginLogoutButtonComponent>;
  let routerStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginLogoutButtonComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [AuthService, FormBuilder],
      imports: [HttpClientModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLogoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize loggedIn value to a boolean", () => {
    expect(typeof component.isLoggedIn).toBe("boolean");
  });

  it("should navigate to signin page on login", () => {
    const comp = fixture.componentInstance;
    const navigateSpy = spyOn((<any>component).router, "navigateByUrl");
    comp.login();
    expect(navigateSpy).toHaveBeenCalledWith("/signin");
  });

  it("should set status to logged out after logging out", () => {
    component.logout();
    expect(component.isLoggedIn).toBeFalsy();
  });
});
