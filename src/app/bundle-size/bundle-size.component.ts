import { Component, OnInit } from '@angular/core';
import { BundleSizeService, BundleSize } from '../state/bundle-size/bundle-size.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bundle-size',
  templateUrl: './bundle-size.component.html',
  styleUrls: ['./bundle-size.component.css']
})
export class BundleSizeComponent implements OnInit {
  bundleSize$: Observable<BundleSize>;

  constructor(private bundleSizeService: BundleSizeService) {}

  ngOnInit() {
    this.bundleSize$ = this.bundleSizeService.getBundleSize();
    this.bundleSize$.subscribe(console.log);
  }
}
