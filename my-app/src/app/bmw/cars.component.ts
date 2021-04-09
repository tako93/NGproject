import { Component, OnInit } from '@angular/core';
import { Icars } from './shared/cars';
import { CarsService } from './shared/cars.service';
import { Store } from '@ngrx/store';
import { setCarAction, editCarAction } from './state/cars.actions';
import { getCarSelector } from './state/cars.selector';
import { Observable } from 'rxjs';
import { ILanguage } from '../ngrx/state/language.interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  carsList: Icars[] = [];

  private _filterValue: string = '';
  filteredCars: Icars[] = [];
   lang$: Observable<ILanguage>;
  translate = {
    KA: {
      h3: '2021 წლის 10 საუკეთესო BMW მოდელი',
      ModelName: 'მოდელის დასახელება',
      AddNewModel: 'დაამატე ახალი მოდელი',
      placeholder: 'შეიყვანე მოდელის სახელი'
    },
    EN: {
      h3: '10 best used BMW models in 2021',
      ModelName: 'Model Name',
      AddNewModel: 'Add New Model',
      placeholder: 'enter model name'
    },
    FR: {
      h3: "Les 10 meilleurs modèles BMW d'occasion en 2021",
      ModelName: 'Nom du modèle',
      AddNewModel: 'AddNewModel',
      placeholder: 'entrez le nom du modèle'
    },
  };
  translated = {
    h3: '2021 წლის 10 საუკეთესო BMW მოდელი',
    ModelName: 'მოდელის დასახელება',
    AddNewModel: 'დაამატე ახალი მოდელი',
      placeholder: 'შეიყვანე მოდელის სახელი'
  };

  constructor(private _carsService: CarsService, private _store: Store<any>) {
    this._store.dispatch(setCarAction({ data: this._carsService.getCars() }));
    this.lang$ = this._store.select('app');
  }

  ngOnInit(): void {
    this.carsList = this._carsService.getCars();
    this._store.select(getCarSelector).subscribe((result) => {
      this.carsList = result;
    })
    this.filterValue = '';

    this.lang$.subscribe((lang) => {
      //@ts-ignore
      this.translated = this.translate[lang.activeLang];
    });
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
