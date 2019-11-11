import { TestBed } from '@angular/core/testing';

import { PackageHistoryService } from './package-history.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PackageHistoryService', () => {
  let service: PackageHistoryService;
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientModule] }));
  beforeEach(() => {
    service = TestBed.get(PackageHistoryService);
  });

  it('should call http with page-history path', () => {
    const httpService = TestBed.get(HttpClient);
    spyOn(httpService, 'get');
    service.getPackageHistory('package-name');
    expect(httpService.get).toHaveBeenCalledWith('/stats?package=package-name');
  });
});
