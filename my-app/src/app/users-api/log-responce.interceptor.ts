import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class LogResponceInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.info('LogResponceInterceptor', req.url);

    return next.handle(req).pipe(tap((event) => {
      if (event.type === HttpEventType.Response) {

        console.log('DATA', event.body);
      }
    }));

  }

}
