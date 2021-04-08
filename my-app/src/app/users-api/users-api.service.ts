import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUsers } from './users-api';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _baseUrl: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUsers> {
    return this.http
      .get<IUsers>(`${this._baseUrl}/users`)
      .pipe(
        tap(
          (data) => console.log('ALL', JSON.stringify(data)),
          catchError(this.handleError)
        )
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `error: ${error.error.message}`;
    } else {
      errorMessage = `code: ${error.status}, error message is: ${error.message}`;
    }

    console.error('handleError', errorMessage);
    return throwError(errorMessage);
  }
}
