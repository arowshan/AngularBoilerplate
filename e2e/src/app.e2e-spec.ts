import { AppPage } from './app.po';
import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { addDelay } from './globals';

addDelay();

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load the sign in page', async () => {
    await page.navigateTo();
    expect(page.getParagraphText()).toContain('Create');
  });
});
