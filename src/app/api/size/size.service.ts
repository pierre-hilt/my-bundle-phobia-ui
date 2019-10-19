import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { sizeMock } from './size.mock';
import { BundleSize } from 'src/app/state/bundle-size/bundle-size-state.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  readonly apiKey = 'size';
  constructor(private httpClient: HttpClient) {}

  getSize(packageName: string): Observable<BundleSize> {
    if (environment.mock) {
      return of(sizeMock);
    }
    return this.httpClient.get<BundleSize>(`/${this.apiKey}?package=${packageName}`);
  }
}
