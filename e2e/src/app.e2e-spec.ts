import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display only search input', () => {
    expect(page.searchInput.isDisplayed()).toBeTruthy();
    expect(page.bundleSizePanel.isDisplayed()).toBeFalsy();
    expect(page.packageHistoryPanel.isDisplayed()).toBeFalsy();
  });

  it('should display result when search is submitted', () => {
    page.search('react');
    page.checkBundleSize();
    page.checkPackageHistory();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
