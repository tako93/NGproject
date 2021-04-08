import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Icars } from '../shared/cars';
import { getCurrentCarSelector } from '../state/cars.selector';

@Component({
  selector: 'app-bmw-edit',
  templateUrl: './bmw-edit.component.html',
  styleUrls: ['./bmw-edit.component.scss'],
})
export class BmwEditComponent implements OnInit {
  // editCar: Icars | null = null;
  
  constructor(private _store: Store) { }
 
  ngOnInit(): void {
    // this._store.select(getCurrentCarSelector).subscribe((car) => {
    //   this.editCar = car;
    // });
  }
}
