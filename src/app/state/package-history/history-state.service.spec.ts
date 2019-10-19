import { TestBed } from '@angular/core/testing';

import { HistoryStateService } from './history-state.service';

describe('HistoryStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistoryStateService = TestBed.get(HistoryStateService);
    expect(service).toBeTruthy();
  });
});
