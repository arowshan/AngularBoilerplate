import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

// ****To delay browser between each test
export const addDelay = () => {
  const origFn = browser.driver.controlFlow().execute;
  browser.driver.controlFlow().execute = function() {
    const args = arguments;
    // queue xxx ms wait
    origFn.call(browser.driver.controlFlow(), function() {
      return protractor.promise.delayed(0);
    });
    return origFn.apply(browser.driver.controlFlow(), args);
  };
};

export const getReport = () => {
  jasmine.getEnv().addReporter({
    specStarted: function(result) {
      return result.fullName;
    }
  });
};
