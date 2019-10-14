import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleSizeComponent } from './bundle-size.component';
import { BundleSizeService } from '../state/bundle-size/bundle-size.service';
import { FileSizePipe } from '../utils/file-size.pipe';

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
    const bundleSizeService: BundleSizeService = TestBed.get(BundleSizeService);
    bundleSizeService.setBundleSize({
      size: 100,
      gzip: 10,
      version: '1.0.0'
    });
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('100.0 bytes');
  });
});
