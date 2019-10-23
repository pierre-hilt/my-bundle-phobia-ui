import { Component, OnInit, Input } from '@angular/core';
import { BundleSize } from 'src/app/state/bundle-size/bundle-size-state.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() bundle: BundleSize;
  @Input() version: string;
  @Input() maximal: number;

  barSize: number;
  gzipPartSize: number;

  constructor() {}

  ngOnInit() {
    console.log(this.version, this.bundle);
    if (this.bundle) {
      this.barSize = ((this.bundle.size + this.bundle.gzip) / this.maximal) * 100;
      this.gzipPartSize = (this.bundle.gzip / this.bundle.size) * 100;
    }
  }
}
