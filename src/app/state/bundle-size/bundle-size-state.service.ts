import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BundleSize {
  size?: number;
  gzip?: number;
  version?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BundleSizeStateService {
  private bundleState$ = new BehaviorSubject<BundleSize>(undefined);

  setBundleSize(bundleSize: BundleSize) {
    this.bundleState$.next(bundleSize);
  }

  getBundleSize() {
    return this.bundleState$.asObservable();
  }
}
