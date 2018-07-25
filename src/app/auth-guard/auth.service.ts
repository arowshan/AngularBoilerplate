import { Injectable, EventEmitter } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";
import { ApiService } from "../apis/api.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;

  // To let service consumers know when loggedIn status changes
  isLoggedInEmitter: EventEmitter<boolean> = new EventEmitter();

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private apiService: ApiService, private router: Router) {
    if (localStorage.getItem("accessToken")) {
      this.isLoggedIn = true;
    }
    this.isLoggedInEmitter.emit(this.isLoggedIn);
  }

  login(signinForm): Observable<boolean> {
    const resp = of({
      accessToken: "dfgh",
      success: true
    });

    // this.apiService.signin(signinForm).subscribe(res => {
    resp.subscribe(res => {
      if (res.success) {
        localStorage.setItem("accessToken", res.accessToken);
        this.isLoggedIn = true;
      }
    });

    this.isLoggedInEmitter.emit(this.isLoggedIn);

    return of(this.isLoggedIn);
  }

  logout(): Observable<boolean> {
    localStorage.clear();
    this.isLoggedIn = false;
    this.isLoggedInEmitter.emit(this.isLoggedIn);

    // console.log(this.router);

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
      console.log("This route does not have a guard");
    }

    if (hasGuard) {
      this.router.navigateByUrl("/");
    }

    return of(this.isLoggedIn);
  }
}
