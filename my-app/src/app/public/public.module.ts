import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { TodoFormComponent } from './forms/todo-form/todo-form.component';
import { BmwFormComponent } from './forms/bmw-form/bmw-form.component';



@NgModule({
  declarations: [TodoFormComponent, BmwFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[TodoFormComponent, BmwFormComponent]
})
export class PublicModule { }
