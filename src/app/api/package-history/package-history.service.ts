import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PackageHistory } from 'src/app/state/package-history/history-state.service';

@Injectable({
  providedIn: 'root'
})
export class PackageHistoryService {
  readonly apiKey = 'package-history';
  constructor(private httpClient: HttpClient) {}

  getPackageHistory(packageName: string): Observable<PackageHistory> {
    return this.httpClient.get<PackageHistory>(`/${this.apiKey}?package=${packageName}`);
  }
}
