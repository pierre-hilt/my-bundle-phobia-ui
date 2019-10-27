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
/**
 * Service to store states of bundle size.
 * Call to API will fill the state, view is listenning to the state to display data.
 */
export class BundleSizeStateService {
  private bundleState$ = new BehaviorSubject<BundleSize>(undefined);

  setBundleSize(bundleSize: BundleSize) {
    this.bundleState$.next(bundleSize);
  }

  getBundleSize() {
    return this.bundleState$.asObservable();
  }
}
