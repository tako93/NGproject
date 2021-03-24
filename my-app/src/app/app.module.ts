import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BmwModule } from './bmw/bmw.module';
import { UsersModule } from './users-api/users.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { LogResponceInterceptor } from './core/log-responce.interceptor';
import { CacheInterceptor } from './core/cache.interceptor';



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
    BmwModule,
    UsersModule,
    AuthModule,
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
    CoreModule,
    
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
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// CacheInterceptor,
//     HttpCacheService,
//     LogResponceInterceptor