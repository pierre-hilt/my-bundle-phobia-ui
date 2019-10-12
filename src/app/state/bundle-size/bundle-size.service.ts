import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BundleSize {
  minified: number;
  gzip: number;
}

@Injectable({
  providedIn: 'root'
})
export class BundleSizeService {
  private bundleState$ = new BehaviorSubject<BundleSize>(undefined);

  setBundleSize(bundleSize: BundleSize) {
    this.bundleState$.next(bundleSize);
  }

  getBundleSize() {
    return this.bundleState$.asObservable();
  }
}
