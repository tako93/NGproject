import { Component, OnInit } from '@angular/core';

import { SignInData } from 'src/app/data/sign-in-form.interface';

import { FirebaseAuthService } from '../shared/firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInData: SignInData = {
    email: '',
    password: '',
    remember: false,
  };

  mouseOverSignInButton: boolean = false;

  constructor(public fireAuthService: FirebaseAuthService) {}

  ngOnInit(): void {}

  onSubmit(signInForm: SignInData) {
    this.fireAuthService.hasError = null;
    this.fireAuthService.signin(signInForm);
  }

  signInWithGoogle() {
    this.fireAuthService.hasError = null;
    this.fireAuthService.googleSignIn();
  }

  toggleMouserOver(value: boolean) {
    this.mouseOverSignInButton = value;
  }
}