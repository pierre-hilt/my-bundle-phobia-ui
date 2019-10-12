import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageHistoryService {
  readonly apiKey = 'package-history';
  constructor(private httpClient: HttpClient) {}

  getPageHistory(packageName: string): Observable<any> {
    return this.httpClient.get(`/${this.apiKey}?package=${packageName}`);
  }
}
