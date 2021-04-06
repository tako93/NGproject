import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/shared/auth.service';

import { EXP_TIME } from '../auth/shared/constants';
import { FirebaseAuthService } from '../auth/shared/firebase-auth.service';
import { ILanguage, Languages } from "../ngrx/state/language.interface"
import { changeLanguage } from '../ngrx/state/language.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  // langs: Array<string> = [];
  // activeLang$: Observable<ILanguage>;
  constructor(
    private authService: AuthService,
    public fireAuthService: FirebaseAuthService,
    private store: Store<any>
  ) {
    // this.activeLang$ = this.store.select('app');
  }

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.validateToken();
    }

    // this.langs = Object.keys(Languages).filter((l) => isNaN(Number(l)));
  }

  private validateToken(): void {
    setInterval(() => {
      if (this.authService.tokenExpired()) {
        if (this.authService.getRefreshToken()) {
          const token: string = this.authService.getRefreshToken() as string;
          if (!this.authService.refreshToken(token)) {
            this.notAuthorizedAction();
          }
        } else {
          this.notAuthorizedAction();
        }
      }
    }, EXP_TIME);
  }

  private notAuthorizedAction(): void {
    this.fireAuthService.signOut();
  }

  onLogOut(event: Event) {
    // console.log(event);
    this.notAuthorizedAction();
  }

  // onChangeLanguage(newLang: string): void {
  //   this.store.dispatch(changeLanguage({ newLang }));
  // }
}