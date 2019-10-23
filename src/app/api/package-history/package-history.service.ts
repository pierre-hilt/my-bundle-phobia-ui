import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PackageHistory } from 'src/app/state/package-history/history-state.service';
import { packageHistoryMock } from './package-history.mock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageHistoryService {
  readonly apiKey = 'package-history';
  constructor(private httpClient: HttpClient) {}

  getPackageHistory(packageName: string): Observable<PackageHistory> {
    if (environment.mock) {
      return of(packageHistoryMock);
    }
    return this.httpClient.get<PackageHistory>(`/${this.apiKey}?package=${packageName}`);
  }
}
