import { Component, OnInit, Input } from '@angular/core';
import { FileSizePipe } from 'src/app/utils/file-size.pipe';
import { BundleSize } from 'src/app/state/package-history/history-state.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() bundle: BundleSize;
  @Input() version: string;
  @Input() maximal: number;

  // Relative percentages of size to maximal size
  gzipPartSize: number;
  minPartSize: number;
  // To display information on hover for each bar
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
