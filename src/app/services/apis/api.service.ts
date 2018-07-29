import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client/http-client.service';
import { apiUrls } from './api-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClientService) {}

  signup(params) {
    // return this.http.post(apiUrls.signup, params);
    return this.http.get('/hello');
  }

  signin(params) {
    return this.http.post(apiUrls.signin, params);
  }

  uploadFile(fileToUpload: File): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post(apiUrls.upload, formData);
  }
}
