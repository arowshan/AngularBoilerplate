import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { ApiService } from '../apis/api.service';
import { Router } from '@angular/router';
import { SigninResponse } from '../../components/signin/signin.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  response: SigninResponse;

  // To let service consumers know when loggedIn status changes
  isLoggedInEmitter: EventEmitter<Object> = new EventEmitter();

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private apiService: ApiService, private router: Router) {
    if (localStorage.getItem('accessToken')) {
      this.isLoggedIn = true;
    }
    this.isLoggedInEmitter.emit({
      isLoggedIn: this.isLoggedIn,
      response: this.response
    });
  }

  login(signinForm): Observable<Subscription> {
    const params = signinForm.value;
    return of(
      this.apiService.signin(params).subscribe(res => {
        this.response = Object.assign(res);
        if (res['success']) {
          localStorage.setItem('accessToken', res['accessToken']);
          this.isLoggedIn = true;
        }
        this.isLoggedInEmitter.emit({
          isLoggedIn: this.isLoggedIn,
          response: this.response
        });
        return res;
      })
    );
  }

  logout(): Observable<boolean> {
    localStorage.clear();
    this.isLoggedIn = false;
    this.isLoggedInEmitter.emit({
      isLoggedIn: this.isLoggedIn,
      response: this.response
    });

    // Only redirect if current page requires user to be logged in
    let hasGuard = false;
    try {
      if (
        // Check for current route guard or child guard
        this.router.routerState.snapshot.root.firstChild.routeConfig
          .canActivate ||
        this.router.routerState.snapshot.root.firstChild.routeConfig
          .canActivateChild
      ) {
        hasGuard = true;
      }
    } catch (e) {
      console.log('This route does not have a guard');
    }

    if (hasGuard) {
      this.router.navigateByUrl('/');
    }

    return of(this.isLoggedIn);
  }
}
