import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApiComponent } from './users-api.component';
import { UsersCardComponent } from './users-card/users-card.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { UserResolver } from './user-resolver.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogResponceInterceptor } from './log-responce.interceptor';
import { CacheInterceptor } from './cache.interceptor';

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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponceInterceptor,
      multi: true,
    },
      {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    }
  ],
  exports: [ UsersApiComponent ]
})
export class UsersModule { }
