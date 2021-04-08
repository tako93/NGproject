import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

// import * as EventEmitter from 'node:events';
import { Icars } from 'src/app/bmw/shared/cars';
import { getCurrentCarSelector } from 'src/app/bmw/state/cars.selector';

@Component({
  selector: 'app-bmw-form',
  templateUrl: './bmw-form.component.html',
  styleUrls: ['./bmw-form.component.scss']
})
export class BmwFormComponent implements OnInit {

  cars?: Icars | null;
  @Input() isEditing: boolean = false;
  @Output() onFormSubmit = new EventEmitter();
  constructor(private _store: Store) { }

  ngOnInit(): void {
    if (this.isEditing) {
      this._store.select(getCurrentCarSelector).subscribe((car) => {
        this.cars = car;
      })
    }
  }

}
