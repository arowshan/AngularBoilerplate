import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators'
import { ApiService } from '../apis/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private apiService: ApiService) {
    if(localStorage.getItem('accessToken')) {
      this.isLoggedIn = true;
    }
  }

  login(signinForm): Observable<boolean> {

    const resp = of({
      'accessToken':'dfgh',
      'success': true
    });

    // this.apiService.signin(signinForm).subscribe(res => {
      resp.subscribe(res => {
        console.log(res);
      if(res.success){
        localStorage.setItem('accessToken', res.accessToken);
        this.isLoggedIn = true;
      }
    });

    return of(this.isLoggedIn);
  }

  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
  }
}
