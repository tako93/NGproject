import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarsComponent } from '../bmw/cars.component';
import { FormsModule } from '@angular/forms';
// import { AuthGuard } from '../auth.guard';



@NgModule({
  declarations: [
    CarsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
       {
        path: '',
        component: CarsComponent,
        // canActivate: [AuthGuard]
      },
    ])
  ]
})
export class BmwModule { }
