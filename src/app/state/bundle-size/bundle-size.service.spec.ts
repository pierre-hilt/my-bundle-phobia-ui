import { TestBed } from '@angular/core/testing';

import { BundleSizeService } from './bundle-size.service';

describe('BundleSizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BundleSizeService = TestBed.get(BundleSizeService);
    expect(service).toBeTruthy();
  });
});
