import { Injectable } from '@angular/core';
import { HistoryStateService } from '../../state/package-history/history-state.service';
import { PackageHistoryService } from '../../api/package-history/package-history.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private packageHistoryService: PackageHistoryService, private historyService: HistoryStateService) {}

  /**
   * Call the API to get bundle information and history.
   * Store the results in the states.
   * @param packageName
   */
  search(packageName: string) {
    // reset the UI
    this.historyService.setHistory(undefined);
    this.packageHistoryService.getPackageHistory(packageName).subscribe(
      data => {
        this.historyService.setHistory(data);
      },
      err => {
        // TODO display the error in the UI
        console.log(err);
      }
    );
  }
}
