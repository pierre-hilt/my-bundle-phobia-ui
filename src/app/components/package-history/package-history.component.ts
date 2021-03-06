import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as semver from 'semver';
import { PackageHistory, HistoryStateService, BundleSize } from 'src/app/state/package-history/history-state.service';

@Component({
  selector: 'app-package-history',
  templateUrl: './package-history.component.html',
  styleUrls: ['./package-history.component.css']
})
export class PackageHistoryComponent implements OnInit, OnDestroy {
  packageHistory: PackageHistory;
  // Maximal size of all history item, used to have a relative size for each bar
  maximalSize = 0;
  // List of sorted version to display in the chart by order
  sortedVersions: string[] = [];

  private subscribtion: Subscription;

  constructor(private historyState: HistoryStateService) {}

  ngOnInit() {
    this.subscribtion = this.historyState.getHistory().subscribe((packageHistory: PackageHistory) => {
      this.packageHistory = packageHistory;
      if (this.packageHistory) {
        this.sortedVersions = Object.keys(packageHistory).sort(semver.compare);
        this.maximalSize = Math.max(
          ...Object.values(this.packageHistory)
            .filter((bundleSize: BundleSize) => !!bundleSize.size && !!bundleSize.gzip)
            .map((bundleSize: BundleSize) => bundleSize.gzip + bundleSize.size)
        );
      }
    });
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
