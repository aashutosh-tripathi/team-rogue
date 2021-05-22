import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public createFeedback(feedback: any): Observable<any> {

    const reqUrl = this.baseUrl+'/createFeedback';

    return this.httpClient.post<any>(reqUrl, feedback).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

  public getFeedbackList(): Observable<any> {

    const reqUrl = this.baseUrl+'/getFeedback';
  
    return this.httpClient.get<any>(reqUrl).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

}

