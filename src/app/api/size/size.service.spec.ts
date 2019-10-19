import { TestBed } from '@angular/core/testing';

import { SizeService } from './size.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('SizeService', () => {
  let service: SizeService;
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientModule] }));
  beforeEach(() => {
    service = TestBed.get(SizeService);
  });

  it('should call http with size path', () => {
    const httpService = TestBed.get(HttpClient);
    spyOn(httpService, 'get');
    service.getSize('package-name');
    expect(httpService.get).toHaveBeenCalledWith('/size?package=package-name');
  });
});
