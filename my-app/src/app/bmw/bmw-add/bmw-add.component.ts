import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Icars } from '../shared/cars';

@Component({
  selector: 'app-bmw-add',
  templateUrl: './bmw-add.component.html',
  styleUrls: ['./bmw-add.component.scss']
})
export class BmwAddComponent implements OnInit {

  // editCar: Icars | null = null;
  // constructor(private _store: Store) {
  //   this._store.select(getCurrentCarSelector).subscribe(car => {
  //      this.editCar = car
  //    })
  //  }

  ngOnInit(): void {
  }

}
