import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PublicModule } from '../public/public.module';


import { AccountComponent } from './account/account.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { AuthGuard } from '../auth.guard';



@NgModule({
  declarations: [
    AccountComponent,
    
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicModule,
    RouterModule.forChild([
      {
        path: 'auth/sign-in',
        component: SignInComponent,
      },
      {
        path: 'auth/sign-up',
        component: SignUpComponent,
      },
  
      {
        path: 'auth/account',
        component: AccountComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class AuthModule {}