import { Component, Input, OnInit } from '@angular/core';
import {IUsersData } from '../users-api';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {

  @Input() user?: IUsersData;

  constructor() { }

  ngOnInit(): void {
  }

}
