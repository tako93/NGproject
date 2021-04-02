import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarsComponent } from '../bmw/cars.component';
import { FormsModule } from '@angular/forms';
import { BmwAddComponent } from './bmw-add/bmw-add.component';
// import { AuthGuard } from '../auth.guard';



@NgModule({
  declarations: [
    CarsComponent,
    BmwAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
       {
        path: '',
        component: CarsComponent,
      },
       {
        path: 'add',
        component: BmwAddComponent,
      },
    ])
  ]
})
export class BmwModule { }
