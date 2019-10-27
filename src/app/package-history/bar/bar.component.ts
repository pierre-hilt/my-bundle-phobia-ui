import { Component, OnInit, Input } from '@angular/core';
import { BundleSize } from 'src/app/state/bundle-size/bundle-size-state.service';
import { FileSizePipe } from 'src/app/utils/file-size.pipe';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() bundle: BundleSize;
  @Input() version: string;
  @Input() maximal: number;

  gzipPartSize: number;
  minPartSize: number;
  title = '';

  constructor(private fileSizePipe: FileSizePipe) {}

  ngOnInit() {
    if (this.bundle) {
      this.minPartSize = (this.bundle.size / this.maximal) * 100;
      this.gzipPartSize = (this.bundle.gzip / this.maximal) * 100;
      this.generateTitle(this.bundle.size, this.bundle.gzip);
    }
  }

  private generateTitle(minSize, gzipSize) {
    if (minSize && gzipSize) {
      this.title = `Minify size is ${this.fileSizePipe.transform(minSize)}`;
      this.title += `\nand GZIP size is ${this.fileSizePipe.transform(gzipSize)}`;
    } else {
      this.title = 'No information available';
    }
  }
}
