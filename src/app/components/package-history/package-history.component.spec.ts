import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageHistoryComponent } from './package-history.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FileSizePipe } from 'src/app/utils/file-size.pipe';
import { HistoryStateService } from 'src/app/state/package-history/history-state.service';

describe('PackageHistoryComponent', () => {
  let component: PackageHistoryComponent;
  let fixture: ComponentFixture<PackageHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackageHistoryComponent, FileSizePipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort versions by ascending order', () => {
    const state: HistoryStateService = TestBed.get(HistoryStateService);
    state.setHistory({
      '1.0.0': {},
      '0.0.0': {},
      '1.1.0': {},
      '0.1.0': {},
      '1.2.0': {}
    });
    expect(component.sortedVersions).toEqual(['0.0.0', '0.1.0', '1.0.0', '1.1.0', '1.2.0']);
  });

  it('should calculate maximal', () => {
    const state: HistoryStateService = TestBed.get(HistoryStateService);
    state.setHistory({
      '1.0.0': { size: 10, gzip: 10 },
      '0.0.0': { size: 1, gzip: 1 },
      '1.1.0': { size: 10, gzip: 10 },
      '0.1.0': { size: 100, gzip: 100 },
      '1.2.0': { size: 10, gzip: 10 }
    });
    expect(component.maximalSize).toEqual(200);
  });
});
