import { AppPage } from './app.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

// ****To delay browser between each test
// const origFn = browser.driver.controlFlow().execute;

// browser.driver.controlFlow().execute = function() {
//   const args = arguments;

//   // queue 100ms wait
//   origFn.call(browser.driver.controlFlow(), function() {
//     return protractor.promise.delayed(100);
//   });

//   return origFn.apply(browser.driver.controlFlow(), args);
// };
/// ****End of To delay browser between each test

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a link to the sign up page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Create');
  });
});
