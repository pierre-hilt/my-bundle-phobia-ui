import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleSizeComponent } from './bundle-size.component';
import { FileSizePipe } from '../../utils/file-size.pipe';
import { HistoryStateService } from 'src/app/state/package-history/history-state.service';

describe('BundleSizeComponent', () => {
  let component: BundleSizeComponent;
  let fixture: ComponentFixture<BundleSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BundleSizeComponent, FileSizePipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BundleSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const historyStateService: HistoryStateService = TestBed.get(HistoryStateService);
    historyStateService.setHistory({
      '1.0.0': {
        size: 100,
        gzip: 10
      }
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('100.0 bytes');
  });
});
