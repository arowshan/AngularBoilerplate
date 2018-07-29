import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('accessToken');
    let clonedRequest;
    if (token) {
      // Clone the request to add the new header
      clonedRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
    } else {
      clonedRequest = req.clone();
    }
    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
