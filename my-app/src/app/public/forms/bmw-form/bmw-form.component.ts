import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// import * as EventEmitter from 'node:events';
import { Icars } from 'src/app/bmw/shared/cars';

@Component({
  selector: 'app-bmw-form',
  templateUrl: './bmw-form.component.html',
  styleUrls: ['./bmw-form.component.scss']
})
export class BmwFormComponent implements OnInit {

  @Input() cars?: Icars;
  @Input() isEditing: boolean = false;
  @Output() onFormSubmit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
