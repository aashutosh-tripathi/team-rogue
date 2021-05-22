import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public createBug(bug: any): Observable<any> {

    const reqUrl = this.baseUrl + '/createBug';

    return this.httpClient.post<any>(reqUrl, bug).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

  public getBugList(): Observable<any> {

    const reqUrl = this.baseUrl + '/getBugs';

    return this.httpClient.get<any>(reqUrl).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

  public fixedBug(bug: any): Observable<any> {

    const reqUrl = this.baseUrl + '/bugfixed';

    return this.httpClient.put<any>(reqUrl, bug).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

}

