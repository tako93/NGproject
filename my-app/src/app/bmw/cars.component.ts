import { Component, OnInit } from '@angular/core';
import { Icars } from './cars';
import { CarsService } from './cars.service';




@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {

  private _filterValue: string = '';
  filteredCars: Icars[] = [];

  carsList: Icars[] = [];

  constructor(private _carsService: CarsService) {

  }

  ngOnInit(): void {

    this.carsList = this._carsService.getCars();
    this.filterValue = '';
  }

  get filterValue(): string {
    return this._filterValue;
  }

  set filterValue(value: string) {
    this._filterValue = value;
    if (this._filterValue) {
      this.filteredCars = this.carsList.filter((p) => { return p.model.toLowerCase().includes(this._filterValue) });
    } else {
      this.filteredCars = this.carsList.slice();
    }
  }


}
