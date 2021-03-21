 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApiComponent } from './users-api.component';
import { UsersCardComponent } from './users-card/users-card.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';



@NgModule({
  declarations: [
    UsersApiComponent,
    UsersCardComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
        path: 'users',
        component: UsersApiComponent,
        canActivate: [AuthGuard]
      },
         {
        path: 'user/:email',
        component: UserDetailComponent,
      },
    ])
  ]
})
export class UsersModule { }
