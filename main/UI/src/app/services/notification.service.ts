import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public createNotification(notification: any): Observable<any> {

    const reqUrl = this.baseUrl+'/createNoti';

    return this.httpClient.post<any>(reqUrl, notification).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

  public getNotificationList(): Observable<any> {

    const reqUrl = this.baseUrl+'/notification';
  
    return this.httpClient.get<any>(reqUrl).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

  public getUserUnreadCount(userId:any): Observable<any> {

    const reqUrl = this.baseUrl+'/userLastNotify/'+userId;
  console.log(reqUrl)
    return this.httpClient.get<any>(reqUrl).pipe(
      map(result => result),
      catchError(error => throwError(error))
    );
  }

}

