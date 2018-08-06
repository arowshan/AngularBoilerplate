import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { SigninPage } from './signin.po';

// ****To delay browser between each test
const origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  const args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};
/// ****End of To delay browser between each test

describe('workspace-project App', () => {
  let page: SigninPage;
  let username;
  let password;
  let submitButton;

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
    expect(page.getParagraphText()).toContain('Create');
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
    expect(page.getSigninErrorMsg()).toContain('Bad');
  });

  it('should log in and redirect to home when credentials are correct', () => {
    username.sendKeys('test');
    password.sendKeys('secret');
    submitButton.click();
    expect(browser.getCurrentUrl()).toContain('home');
  });
});
