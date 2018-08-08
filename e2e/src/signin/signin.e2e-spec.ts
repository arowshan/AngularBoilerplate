import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { SigninPage } from './signin.po';
import { addDelay } from '../globals';

addDelay();

describe('Component SignIn', () => {
  let page: SigninPage;
  let username;
  let password;
  let submitButton;
  let currentTest;

  beforeEach(() => {
    page = new SigninPage();
    username = page.getUsername();
    username.clear();
    password = page.getPassword();
    password.clear();
    submitButton = page.getSubmitButton();
  });

  it('should have a link to the sign up page', () => {
    page.navigateTo();
    expect(page.getSignupLink()).toContain('Create');
  });

  it('should have a username and password field that user can fill which enables the submit button', () => {
    expect(submitButton.isEnabled()).toBe(false);
    username.sendKeys('test');
    password.sendKeys('secret');
    expect(submitButton.isEnabled()).toBe(true);
  });

  it('should not log in when bad credentials are provided', () => {
    username.sendKeys('wronguser');
    password.sendKeys('nopass');
    submitButton.click();
    expect(page.getSigninErrorMsg()).toContain('Invalid');
  });

  it('should log in and redirect to home when credentials are correct', () => {
    username.sendKeys('test');
    password.sendKeys('secret');
    submitButton.click();
    expect(browser.getCurrentUrl()).toContain('home');
    page.logout();
  });

  afterAll(() => {});
});
