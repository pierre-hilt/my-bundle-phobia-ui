import { Injectable } from '@angular/core';
import { SizeService } from '../api/size/size.service';
import { BundleSizeStateService } from '../state/bundle-size/bundle-size-state.service';
import { HistoryStateService } from '../state/package-history/history-state.service';
import { PackageHistoryService } from '../api/package-history/package-history.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private sizeService: SizeService,
    private packageHistoryService: PackageHistoryService,
    private historyService: HistoryStateService,
    private bundleSize: BundleSizeStateService
  ) {}

  search(packageName: string) {
    this.sizeService.getSize(packageName).subscribe(data => {
      this.bundleSize.setBundleSize(data);
    });

    this.packageHistoryService.getPackageHistory(packageName).subscribe(data => {
      this.historyService.setHistory(data);
    });
  }
}
