import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type PackageHistory = { [version: string]: BundleSize };

export interface BundleSize {
  size?: number;
  gzip?: number;
  version?: string;
}

@Injectable({
  providedIn: 'root'
})
/**
 * Service to store states of package history.
 * Call to API will fill the state, view is listenning to the state to display data.
 */
export class HistoryStateService {
  private packageHistoryState$ = new BehaviorSubject<PackageHistory>(undefined);

  setHistory(packageHistory: PackageHistory) {
    this.packageHistoryState$.next(packageHistory);
  }

  getHistory() {
    return this.packageHistoryState$.asObservable();
  }
}
