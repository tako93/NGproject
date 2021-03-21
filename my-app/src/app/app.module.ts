import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BmwModule } from './bmw/bmw.module';
import { UsersModule } from './users-api/users.module';



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
    RouterModule.forRoot([
        {
        path: '**',
        component: PageNotFoundComponent,
      }
    ]),
    UsersModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
