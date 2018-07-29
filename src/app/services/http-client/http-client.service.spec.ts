import { TestBed, inject } from '@angular/core/testing';

import { HttpClientService } from './http-client.service';
import {
  HttpClientModule,
  HttpClient,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Data } from '../../../../node_modules/@angular/router';

describe('HttpClientService', () => {
  let service: HttpClientService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const testUrl = '/data';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(HttpClientService);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
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
    service.delete('test');
    expect(spy).toHaveBeenCalled();
  });

  it('can test HttpClient.get', () => {
    const testData: Data = { name: 'Test Data' };

    // Make an HTTP GET request
    httpClient.get<Data>('/data').subscribe(data =>
      // When observable resolves, result should match test data
      expect(data).toEqual(testData)
    );

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('/data');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';

    httpClient.get<Data[]>(testUrl).subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    const req = httpTestingController.expectOne(testUrl);

    // Respond with mock error
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });
});
