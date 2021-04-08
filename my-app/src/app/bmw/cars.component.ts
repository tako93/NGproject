import { Component, OnInit } from '@angular/core';
import { Icars } from './shared/cars';
import { CarsService } from './shared/cars.service';
import { Store } from '@ngrx/store';
import { setCarAction, editCarAction } from './state/cars.actions';
import { getCarSelector } from './state/cars.selector';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  carsList: Icars[] = [];

  private _filterValue: string = '';
  filteredCars: Icars[] = [];

  constructor(private _carsService: CarsService, private _store: Store) {
     this._store.dispatch(setCarAction({ data: this._carsService.getCars() }));
  }

  ngOnInit(): void {
    this.carsList = this._carsService.getCars();
    this._store.select(getCarSelector).subscribe((result) => {
      this.carsList = result;
    })
    this.filterValue = '';
  }

  get filterValue(): string {
    return this._filterValue;
  }

  set filterValue(value: string) {
    this._filterValue = value;
    if (this._filterValue) {
      this.filteredCars = this.carsList.filter((p) => {
        return p.model.toLowerCase().includes(this._filterValue);
      });
    } else {
      this.filteredCars = this.carsList.slice();
    }
  }


  onCarEdit(selectedCar: Icars): void {

    this._store.dispatch(editCarAction({car: selectedCar}))
    
  }


}
