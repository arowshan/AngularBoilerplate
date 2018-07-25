import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client/http-client.service';
import { apiUrls } from './api-list';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClientService) {}

  signup(params) {
    return this.http.get(apiUrls.signup, params);
  }

  signin(params) {
    return this.http.post(apiUrls.signin, params);
  }
}
