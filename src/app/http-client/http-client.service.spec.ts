import { TestBed, inject } from '@angular/core/testing';

import { HttpClientService } from './http-client.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttpClientService', () => {
  let service: HttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientService],
      imports: [HttpClientModule]
    });

    service = TestBed.get(HttpClientService);
  });

  it('should be created', inject(
    [HttpClientService],
    (service: HttpClientService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return a url string', () => {
    expect(typeof service.setupUrl('test')).toBe('string');
  });

  it('should call setup url on a get request', () => {
    const spy = spyOn(service, 'setupUrl');
    service.get('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call setup url on a post request', () => {
    const spy = spyOn(service, 'setupUrl');
    service.post('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should call setup url on a delete request', () => {
    const spy = spyOn(service, 'setupUrl');
    service.get('test');
    expect(spy).toHaveBeenCalled();
  });

  it('should return a url string', () => {
    expect(typeof service.setupUrl('test')).toBe('string');
  });
});
