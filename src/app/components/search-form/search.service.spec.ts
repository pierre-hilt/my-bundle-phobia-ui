import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { HistoryStateService, BundleSize } from 'src/app/state/package-history/history-state.service';

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
    const historyStateService: HistoryStateService = TestBed.get(HistoryStateService);
    const bundleState = {
      '1.0.0': {
        gzip: 10,
        size: 100
      }
    };
    spyOn(httpService, 'get').and.returnValue(of(bundleState));
    service.search('package-name');
    historyStateService
      .getHistory()
      .pipe(filter(data => !!data))
      .subscribe(data => {
        expect(data).toEqual(bundleState);
      });
  });
});
