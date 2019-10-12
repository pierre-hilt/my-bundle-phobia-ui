import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  readonly apiKey = 'size';
  constructor(private httpClient: HttpClient) {}

  getSize(packageName: string): Observable<any> {
    return this.httpClient.get(`/${this.apiKey}?package=${packageName}`);
  }
}
