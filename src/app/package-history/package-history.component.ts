import { Component, OnInit } from '@angular/core';
import { HistoryStateService, PackageHistory } from '../state/package-history/history-state.service';
import { Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { BundleSize } from '../state/bundle-size/bundle-size-state.service';
import * as semver from 'semver';

@Component({
  selector: 'app-package-history',
  templateUrl: './package-history.component.html',
  styleUrls: ['./package-history.component.css']
})
export class PackageHistoryComponent implements OnInit {
  packageHistory: PackageHistory;
  subscribtion: Subscription;
  maximalSize = 0;

  sortedVersions: string[] = [];

  constructor(private historyState: HistoryStateService) {}

  ngOnInit() {
    this.subscribtion = this.historyState
      .getHistory()
      .pipe(
        tap(console.log),
        filter(data => !!data)
      )
      .subscribe((packageHistory: PackageHistory) => {
        this.packageHistory = packageHistory;
        this.sortedVersions = Object.keys(packageHistory).sort(semver.compare);
        this.maximalSize = Math.max(
          ...Object.values(this.packageHistory)
            .filter((bundleSize: BundleSize) => !!bundleSize.size && !!bundleSize.gzip)
            .map((bundleSize: BundleSize) => bundleSize.gzip + bundleSize.size)
        );
      });
  }
}
