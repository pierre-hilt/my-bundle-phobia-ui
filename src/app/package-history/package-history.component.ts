import { Component, OnInit } from '@angular/core';
import { HistoryStateService, PackageHistory } from '../state/package-history/history-state.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-package-history',
  templateUrl: './package-history.component.html',
  styleUrls: ['./package-history.component.css']
})
export class PackageHistoryComponent implements OnInit {
  packageHistory$: Observable<PackageHistory>;

  constructor(private historyState: HistoryStateService) {}

  ngOnInit() {
    this.packageHistory$ = this.historyState.getHistory().pipe(tap(console.log));
  }
}
