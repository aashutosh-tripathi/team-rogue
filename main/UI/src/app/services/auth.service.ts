import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public validateUser(user:any): Observable<any> {

    const reqUrl = this.baseUrl+'/login';
  
    return this.httpClient.post<any>(reqUrl,user).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

  public validateAdmin(admin:any): Observable<any> {

    const reqUrl = this.baseUrl+'/adminlogin';
  
    return this.httpClient.post<any>(reqUrl,admin).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

}

