import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryStateService, PackageHistory, BundleSize } from 'src/app/state/package-history/history-state.service';
import { map } from 'rxjs/operators';
import * as semver from 'semver';

@Component({
  selector: 'app-bundle-size',
  templateUrl: './bundle-size.component.html',
  styleUrls: ['./bundle-size.component.css']
})
export class BundleSizeComponent implements OnInit {
  bundleSize$: Observable<BundleSize>;

  constructor(private historyState: HistoryStateService) {}

  ngOnInit() {
    this.bundleSize$ = this.historyState.getHistory().pipe(
      map((history: PackageHistory) => {
        if (history) {
          const lastVersion = Object.keys(history)
            .sort(semver.compare)
            .slice(-1)[0];
          return { ...history[lastVersion], version: lastVersion };
        } else {
          return undefined;
        }
      })
    );
  }
}
