import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { LocalStorageService } from 'src/app/core/storage.service';
import { SignInData } from 'src/app/data/sign-in-form.interface';
// import { TOKEN_KEY } from 'src/app/auth/shared/constants';
// import { AuthService } from '../shared/auth.service';
import { FirebaseAuthService } from '../shared/firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInData: SignInData = {
    email: 'takko.city@mail.com',
    password: 'takotako',
    remember: false,
  };
  constructor(
    // private router: Router,
    // private _authService: AuthService,
    // private storageService: LocalStorageService,
    private fireAuthService: FirebaseAuthService,
  ) {}

  ngOnInit(): void {}

  async onSubmit(signInForm: NgForm) {
   

    this.fireAuthService.signin(this.signInData)
  }

  SignInWithGoogle() {
    this.fireAuthService.googleSignIn();
  }
}


