import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUsers } from './users-api';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})


export class UsersService {

    private _baseUrl: string = 'https://reqres.in/api';
    constructor(private http: HttpClient) {}

    getUsers(): Observable<IUsers>{
        return this.http.get<IUsers>(`${this._baseUrl}/users`)
    }

    // getUser(id: number): Observable<IUsers>{
    //     return this.http.get<IUsers>(`${this._baseUrl}/users/${id}`)
    // }
}
