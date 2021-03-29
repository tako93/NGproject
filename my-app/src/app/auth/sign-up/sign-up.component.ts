import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { TOKEN_KEY } from 'src/app/auth/shared/constants';
import { SignUpData } from '../../data/sign-up-form.interface';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/storage.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpData: SignUpData = {
    email: 'takko.city@mail.com',
    password: 'takotako',
  };
  constructor(private router: Router, private authService: AuthService, private storageService: LocalStorageService) {}

  ngOnInit(): void {}

  async onSubmit(signUpForm: NgForm) {
 
    //  this.authService.signUp(this.signUpData).subscribe((registered) => {
    //   if (registered) {
    //     this.router.navigate(['auth/account']);
    //   }
    // });

    try {
      const record = await this.authService.firebaseSignUp(this.signUpData);
      const idTokeResult = await record.user?.getIdTokenResult();
      console.log(record)
        if (idTokeResult?.token) {
        this.storageService.set(TOKEN_KEY, idTokeResult.token); 
        if (this.authService.redirectUrl !== '') {
          this.router.navigateByUrl(this.authService.redirectUrl);
        } else {
          this.router.navigate(['auth/account']);
        }
     }
    } catch (err) {
      console.log('ERROR', err.message);
    }
  }
}