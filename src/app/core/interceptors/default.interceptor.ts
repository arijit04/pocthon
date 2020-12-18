import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators'

import { ToastrService } from 'ngx-toastr';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private toastrService: ToastrService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = '';
    return next.handle(req.clone({
      // headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Access-Control-Allow-Origin': '*'
      })
    })).pipe(
      mergeMap((event: any) => {
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => {
        this.toastrService.error('Something went wrong.', 'Please contact backend developer', {
          timeOut: 3000,
        });
        // return throwError(err);
        // throw new Error(err.message);
        return of(err);
      })
    );
  }
}
