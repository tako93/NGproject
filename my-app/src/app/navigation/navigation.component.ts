import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/shared/auth.service';

import { EXP_TIME } from '../auth/shared/constants';
import { FirebaseAuthService } from '../auth/shared/firebase-auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public fireAuthService: FirebaseAuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.validateToken();
    }
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
    this.notAuthorizedAction();
  }
}
