import { Injectable } from '@angular/core';
import { SizeService } from '../api/size/size.service';
import { BundleSizeService } from '../state/bundle-size/bundle-size.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private sizeService: SizeService, private bundleSize: BundleSizeService) {}

  search(packageName: string) {
    this.sizeService.getSize(packageName).subscribe(data => this.bundleSize.setBundleSize(data));
  }
}
