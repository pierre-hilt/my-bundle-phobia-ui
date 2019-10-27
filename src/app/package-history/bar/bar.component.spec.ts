import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponent } from './bar.component';
import { FileSizePipe } from 'src/app/utils/file-size.pipe';

describe('BarComponent', () => {
  let component: BarComponent;
  let fixture: ComponentFixture<BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate size', () => {
    component.bundle = {
      size: 6000,
      gzip: 4000
    };
    component.maximal = 10000;
    component.ngOnInit();
    expect(component.minPartSize).toEqual(60);
    expect(Math.floor(component.gzipPartSize)).toEqual(40);
  });
});
