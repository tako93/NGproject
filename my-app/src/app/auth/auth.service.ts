import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignInData, SignInResponse } from '../data/sign-in-form.interface';
import { LocalStorageService } from "../core/storage.service"
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { TOKEN_KEY } from '../shared/constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private storageService: LocalStorageService, private http: HttpClient ) { }
  signIn(data: SignInData): Observable<boolean> {
    return this.http.post<SignInResponse>('https://reqres.in/api/login', data).pipe(tap((result) => {
      this.storageService.set(TOKEN_KEY, result.token)
    }),
      map((result) => {
        if (result.token) {
          return true;
        } else {
          return false;
        }
    })
    );
  }


  isAuthorized(): boolean {
    return this.storageService.exists(TOKEN_KEY);
  }
}
