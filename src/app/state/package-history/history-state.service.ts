import { Injectable } from '@angular/core';
import { BundleSize } from '../bundle-size/bundle-size-state.service';
import { BehaviorSubject } from 'rxjs';

export type PackageHistory = { [version: string]: BundleSize };

@Injectable({
  providedIn: 'root'
})
export class HistoryStateService {
  private packageHistoryState$ = new BehaviorSubject<PackageHistory>(undefined);

  setHistory(packageHistory: PackageHistory) {
    this.packageHistoryState$.next(packageHistory);
  }

  getHistory() {
    return this.packageHistoryState$.asObservable();
  }
}
