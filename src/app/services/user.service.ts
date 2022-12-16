import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'http://localhost:3000/users'; // URL to web api

  constructor(private http: HttpClient) {}

  getUsers(): Observable<HttpResponse<User[]>> {
    return this.http
      .get<User[]>(this.usersUrl, { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  createUser(user: User): Observable<HttpResponse<User>> {
    return this.http
      .post<any>(this.usersUrl, user, { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<HttpResponse<User>> {
    return this.http
      .put<any>(this.usersUrl, user, { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  deleteUser(userId: number): Observable<HttpResponse<any>> {
    return this.http
      .delete<any>(this.usersUrl + '/' + userId, { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
