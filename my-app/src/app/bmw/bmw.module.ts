import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarsComponent } from '../bmw/cars.component';
import { FormsModule } from '@angular/forms';
import { BmwAddComponent } from './bmw-add/bmw-add.component';
import { PublicModule } from '../public/public.module';
import { BmwEditComponent } from './bmw-edit/bmw-edit.component';
// import { BmwFormComponent } from '../public/forms/bmw-form/bmw-form.component';
// import { AuthGuard } from '../auth.guard';



@NgModule({
  declarations: [
    CarsComponent,
    BmwAddComponent,
    BmwEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicModule,
    RouterModule.forChild([
       {
        path: '',
        component: CarsComponent,
      },
       {
        path: 'add',
        component: BmwAddComponent,
      },
          {
        path: 'edit/:bmwId',
        component:  BmwEditComponent,
      },
    ])
  ]
})
export class BmwModule { }
