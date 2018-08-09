import { browser, by, element } from 'protractor';

export class SignupPage {
  navigateTo() {
    return browser.get('/signup');
  }

  getSigninLink() {
    return element(by.css('.redirect-msg')).getText();
  }

  getName() {
    return element(by.css('input[formControlName=email]'));
  }

  getUsername() {
    return element(by.css('input[formControlName=email]'));
  }

  getEmail() {
    return element(by.css('input[formControlName=email]'));
  }

  getPassword() {
    return element(by.css('input[formControlName=password]'));
  }

  getFormControl(fcName) {
    return element(by.css(`input[formControlName=${fcName}]`));
  }

  getSubmitButton() {
    return element(by.css('button[type=submit]'));
  }
}
