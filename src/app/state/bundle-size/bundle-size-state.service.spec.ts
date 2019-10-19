import { TestBed } from '@angular/core/testing';

import { BundleSizeStateService } from './bundle-size-state.service';

describe('BundleSizeStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BundleSizeStateService = TestBed.get(BundleSizeStateService);
    expect(service).toBeTruthy();
  });
});
