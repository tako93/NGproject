import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'src/app/data/sign-in-form.interface';
import { FirebaseAuthService } from '../shared/firebase-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  // signInData: SignInData = {
  //   email: 'takko.city@mail.com',
  //   password: 'takotako',
  //   remember: false,
  // };

  public email = '';

   signInData: SignInData = {
    email: '',
    password: '',
    remember: false,
  };

  constructor(
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


