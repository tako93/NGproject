import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarsComponent } from '../bmw/cars.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
       {
        path: 'bmw',
        component: CarsComponent,
      },
    ])
  ]
})
export class BmwModule { }
