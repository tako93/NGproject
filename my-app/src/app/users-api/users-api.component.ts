import { Component, OnInit } from '@angular/core';
import { IUsers } from './users-api';
import { UsersService } from './users-api.service';

@Component({
  selector: 'app-users-api',
  templateUrl: './users-api.component.html',
  styleUrls: ['./users-api.component.scss']
})
export class UsersApiComponent implements OnInit {

  usersList: IUsers[] = [];
  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((data) => {
      this.usersList = data;
    })
  }

}
