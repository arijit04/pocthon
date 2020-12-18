import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dif } from '../model/dif';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DifService {
  // "proxyConfig": "proxy.config.js"

  // private readonly BASE_URL: string = `/v1/distributor`;
  private readonly BASE_URL: string = `https://8xfd8uu1ph.execute-api.us-east-2.amazonaws.com/v1/distributor`;


  constructor(private http: HttpClient) { }

  searchDif(id): Observable<Dif>{
    return this.http.get<Dif>(`${this.BASE_URL}?distributor_id=${id}`).pipe(
      tap((data)=>{
        
      })
    );
  }

  createDif(body) : Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}`, body).pipe(
      tap((data)=>{
        
      })
    );
  }
}
