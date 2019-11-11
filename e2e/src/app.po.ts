import { browser, by, element } from 'protractor';

/**
 * Page object for the whole application
 */
export class AppPage {
  get searchInput() {
    return element(by.css('#search-input'));
  }

  get bundleSizePanel() {
    return element(by.css('.bundle-container'));
  }

  get packageHistoryPanel() {
    return element(by.css('.history-container'));
  }

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  search(packageName: string) {
    this.searchInput.clear();
    this.searchInput.sendKeys(packageName);
    this.searchInput.submit();
  }

  checkBundleSize() {
    expect(this.bundleSizePanel.isDisplayed()).toBeTruthy();
    expect(this.bundleSizePanel.element(by.css('h2')).getText()).toEqual('Bundle Size');
    const stats = this.bundleSizePanel.all(by.css('.size-stat'));
    expect(stats.count()).toEqual(3);
    expect(stats.get(0).getText()).toEqual('16.11.0\nVersion');
    expect(stats.get(1).getText()).toEqual('6.3 KB\nMinified');
    expect(stats.get(2).getText()).toEqual('2.6 KB\nMinified + GZIP');
  }

  checkPackageHistory() {
    expect(this.packageHistoryPanel.isDisplayed()).toBeTruthy();
    expect(this.packageHistoryPanel.element(by.css('h2')).getText()).toEqual('Package History');
    expect(this.packageHistoryPanel.element(by.css('.bar-chart')).isDisplayed()).toBeTruthy();
    const chartBars = this.packageHistoryPanel.all(by.css('.bar-chart .full-bar'));
    expect(chartBars.count()).toEqual(15);
    // first bar is empty because no bundle is set for this version
    expect(
      chartBars
        .get(0)
        .element(by.css('.empty-bar'))
        .isDisplayed()
    ).toBeTruthy();
    expect(chartBars.all(by.css('.empty-bar')).count()).toEqual(1);
    expect(chartBars.map(element => element.getText())).toEqual([
      '0.0.0-experimental-5faf377df',
      '16.6.3',
      '16.7.0',
      '16.8.0',
      '16.8.1',
      '16.8.2',
      '16.8.3',
      '16.8.4',
      '16.8.5',
      '16.8.6',
      '16.9.0',
      '16.10.0',
      '16.10.1',
      '16.10.2',
      '16.11.0'
    ]);
  }
}
