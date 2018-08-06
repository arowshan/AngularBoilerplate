import { browser, by, element } from 'protractor';

export class SigninPage {
  navigateTo() {
    return browser.get('/signin');
  }

  getParagraphText() {
    return element(by.css('.redirect-msg')).getText();
  }

  getUsername() {
    return element(by.css('input[formControlName=usernameOrEmail]'));
  }

  getPassword() {
    return element(by.css('input[formControlName=password]'));
  }

  getSubmitButton() {
    return element(by.css('button[type=submit]'));
  }

  getSigninErrorMsg() {
    return element(by.css('mat-error')).getText();
  }
}
