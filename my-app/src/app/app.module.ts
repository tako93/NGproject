import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';

import { BmwModule } from './bmw/bmw.module';
import { UsersModule } from './users-api/users.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

import { LogResponceInterceptor } from './core/log-responce.interceptor';
import { CacheInterceptor } from './core/cache.interceptor';
import { AddAuthTokenInterceptor } from './core/auth-token.interceptor';

import { firebaseConfig } from '../firebaseConfig';
import { PublicModule } from './public/public.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    UsersModule,
    AuthModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: 'bmw',
        loadChildren: () =>
          import('./bmw/bmw.module').then((m) => m.BmwModule),
      },
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
    PublicModule,
  
    
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


