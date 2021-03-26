import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BmwModule } from './bmw/bmw.module';
import { UsersModule } from './users-api/users.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { LogResponceInterceptor } from './core/log-responce.interceptor';
import { CacheInterceptor } from './core/cache.interceptor';
import { AddAuthTokenInterceptor } from './core/auth-token.interceptor';
// import { AccountComponent } from './auth/account/account.component';
// import { SignUpComponent } from './auth/sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent,
    // AccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BmwModule,
    UsersModule,
    AuthModule,
    CoreModule,
    RouterModule.forRoot([
       {
        path: '',
        redirectTo: 'bmw',
        pathMatch: 'full',
      }, 
      {
        path: '**',
        component: PageNotFoundComponent,
      }
    ]),
  
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddAuthTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponceInterceptor,
      multi: true,
    },
     {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


