import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/signin');
  }

  getParagraphText() {
    return element(by.css('.redirect-msg')).getText();
  }
}
