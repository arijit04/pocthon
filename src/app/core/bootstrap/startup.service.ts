import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class StartupService {
  constructor(private http: HttpClient) {}

  // todo: this file if you want to call any api at the starting of the application
  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('' + Date.now())
        .pipe(
          catchError(res => {
            resolve();
            return res;
          })
        )
        .subscribe(
          (res: any) => {
            //do something with this data
          },
          () => {},
          () => {
            resolve();
          }
        );
    });
  }
}
