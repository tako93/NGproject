import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUsersData, IUsers } from './users-api';
import { UsersService } from './users-api.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-users-api',
  templateUrl: './users-api.component.html',
  styleUrls: ['./users-api.component.scss']
})
export class UsersApiComponent implements OnInit {
  

  usersList: IUsersData[] = [];
  constructor(private _usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((responce: IUsers) => {
    this.usersList = responce.data;
     })
      // console.log(this.route.snapshot.data(usersResponse))
  
   
  }

}
