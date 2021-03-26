import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/data/sign-in-form.interface';
import { AuthService } from '../auth.service';
import { User } from '../../data/user-data.interface'
import { UserRole } from 'src/app/data/user-roles.interface';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  private activeUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
    role: UserRole.guest,
  }

  signInData: SignInData = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
    remember: false,
  };
  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(signInForm: NgForm) {
    this._authService
      .signIn(this.signInData)
      .subscribe((isAuthorized: boolean) => {
        
        if (isAuthorized) {
          if (this._authService.redirectUrl !== '') {
             this.router.navigateByUrl(this._authService.redirectUrl)
          } else {
            this.router.navigate(['auth/users'])
          }
        };
      });
  }
}