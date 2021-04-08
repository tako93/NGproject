import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApiComponent } from '../users-api.component';
import { UsersCardComponent } from '../users-card/users-card.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { UserResolver } from '../user-resolver.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../state/users.reducer'

@NgModule({
  declarations: [
    UsersApiComponent,
    UsersCardComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    StoreModule.forFeature('users', {userReducer}),
    RouterModule.forChild([
      {
        path: 'users',
        component: UsersApiComponent,
        resolve: {
          usersResponse: UserResolver
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'user/:email',
        component: UserDetailComponent,
      },
    ])
  ],
  providers: [
  
  ],
  exports: [ UsersApiComponent ]
})
export class UsersModule { }
