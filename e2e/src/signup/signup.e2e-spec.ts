import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { SignupPage } from './signup.po';
import { addDelay } from '../globals';

addDelay();

describe('Component SignUp', () => {
  let page: SignupPage;
  let name;
  let username;
  let email;
  let password;
  let submitButton;
  let currentTest;

  beforeAll(() => {
    page = new SignupPage();
    page.navigateTo();
  });

  beforeEach(() => {
    name = page.getFormControl('name');
    username = page.getFormControl('username');
    email = page.getFormControl('email');
    password = page.getFormControl('password');
    username.clear();
    name.clear();
    email.clear();
    password.clear();
    submitButton = page.getSubmitButton();
  });

  it('should have a link to the sign in page', () => {
    expect(page.getSigninLink()).toContain('Sign In');
  });

  it('should have a email and password field that user can fill which enable submission', () => {
    expect(submitButton.isEnabled()).toBe(false);
    name.sendKeys('test user');
    username.sendKeys('testuser');
    email.sendKeys('test@test.com');
    password.sendKeys('testpass');
    expect(submitButton.isEnabled()).toBe(true);
  });
});
