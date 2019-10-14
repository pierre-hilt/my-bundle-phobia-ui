import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.mock';
import { sizeMock } from './size.mock';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  readonly apiKey = 'size';
  constructor(private httpClient: HttpClient) {}

  getSize(packageName: string): Observable<any> {
    if (environment.mock) {
      return of(sizeMock);
    }
    return this.httpClient.get(`/${this.apiKey}?package=${packageName}`);
  }
}
