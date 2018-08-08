import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { SignupPage } from './signup.po';
import { addDelay } from '../globals';

addDelay();

describe('Component SignUp', () => {
  let page: SignupPage;
  let username;
  let password;
  let submitButton;
  let currentTest;

  beforeEach(() => {
    page = new SignupPage();
  });

  it('should have a link to the sign in page', () => {
    page.navigateTo();
    expect(page.getSigninLink()).toContain('Sign In');
  });

  // it('should have a username and password field that user can fill which enables the submit button', () => {
  //   expect(submitButton.isEnabled()).toBe(false);
  //   username.sendKeys('test');
  //   password.sendKeys('secret');
  //   expect(submitButton.isEnabled()).toBe(true);
  // });
});
