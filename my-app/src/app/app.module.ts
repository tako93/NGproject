import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { CarsComponent } from './bmw/cars.component';
import { UsersApiComponent } from './users-api/users-api.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersCardComponent } from './users-api/users-card/users-card.component';
import { UserDetailComponent } from './users-api/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    UsersApiComponent,
    PageNotFoundComponent,
    NavigationComponent,
    UsersCardComponent,
    UserDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersApiComponent,
      },
        {
        path: 'bmw',
        component: CarsComponent,
      },
         {
        path: 'user/:email',
        component: UserDetailComponent,
      },
        {
        path: '**',
        component: PageNotFoundComponent,
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
