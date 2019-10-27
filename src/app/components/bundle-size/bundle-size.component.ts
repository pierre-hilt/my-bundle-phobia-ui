import { Component, OnInit } from '@angular/core';
import { BundleSizeStateService, BundleSize } from '../../state/bundle-size/bundle-size-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bundle-size',
  templateUrl: './bundle-size.component.html',
  styleUrls: ['./bundle-size.component.css']
})
export class BundleSizeComponent implements OnInit {
  bundleSize$: Observable<BundleSize>;

  constructor(private bundleSizeService: BundleSizeStateService) {}

  ngOnInit() {
    this.bundleSize$ = this.bundleSizeService.getBundleSize();
  }
}
