import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BundleSizeService, BundleSize } from '../state/bundle-size/bundle-size.service';
import { filter } from 'rxjs/operators';
import { of } from 'rxjs';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  beforeEach(() => {
    service = TestBed.get(SearchService);
  });

  it('should set BundleSizeState after search', () => {
    const httpService = TestBed.get(HttpClient);
    const bundleSizeService: BundleSizeService = TestBed.get(BundleSizeService);
    const bundleState: BundleSize = {
      gzip: 10,
      size: 100,
      version: '1.0.0'
    };
    spyOn(httpService, 'get').and.returnValue(of(bundleState));
    service.search('package-name');
    bundleSizeService
      .getBundleSize()
      .pipe(filter(data => !!data))
      .subscribe(data => {
        expect(data).toEqual(bundleState);
      });
  });
});
