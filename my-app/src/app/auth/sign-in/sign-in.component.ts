import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { SignInData } from 'src/app/data/sign-in-form.interface';
import { FirebaseAuthService } from '../shared/firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
 
  mouseOverSignInButton: boolean = false;

  signInData: SignInData = {
    email: '',
    password: '',
    remember: false,
  };

  constructor(public fireAuthService: FirebaseAuthService) {}

  ngOnInit(): void {}

  onSubmit(signInForm: SignInData) {
    this.fireAuthService.hasError = null;
    this.fireAuthService.signin(this.signInData);
  }

  SignInWithGoogle() {
    this.fireAuthService.googleSignIn();
  }

  toggleMouseOver(value: boolean) {
    this.mouseOverSignInButton = value;
  }

}
