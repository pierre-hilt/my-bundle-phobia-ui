import { Component } from '@angular/core';
import { PackageHistoryService } from './api/package-history/package-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-site';

  constructor(private packageHistory: PackageHistoryService) {}

  getHistory() {
    this.packageHistory.getPageHistory('toto').subscribe(console.log);
  }
}
