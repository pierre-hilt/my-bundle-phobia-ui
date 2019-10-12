import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageHistoryService {
  constructor(private httpClient: HttpClient) {}

  getPageHistory(packageName: string): Observable<any> {
    return this.httpClient.get('/package-history?package=' + packageName);
  }
}
