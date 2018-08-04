import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  setupUrl(url) {
    return environment.backendUrl + url;
  }

  getHeaders() {
    const headers: HttpHeaders = new HttpHeaders();
    // Setting token with http interceptor
    // Alternative
    // if (localStorage.accessToken) {
    //   headers.append('Authorization', `Bearer ${localStorage.accessToken}`);
    // }
    return headers;
  }

  get(url) {
    return this.http
      .get(this.setupUrl(url), { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  post(url, body?) {
    return this.http
      .post(this.setupUrl(url), body)
      .pipe(catchError(this.handleError));
  }

  delete(url) {
    return this.http
      .delete(this.setupUrl(url), { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      console.log(error);
    }
    // return an observable with a user-facing error message
    return throwError('Something went wrong.');
  }
}
