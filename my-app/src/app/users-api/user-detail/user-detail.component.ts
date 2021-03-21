import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { IUsers, IUsersData } from '../users-api';
import { UsersService } from '../users-api.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userEmail: string = 'user detail';
  user: IUsersData | undefined;
 
  constructor(private route: ActivatedRoute, private _usersService: UsersService) { }

  ngOnInit(): void {
    const email = this.route.snapshot.paramMap.get('email');
    this._usersService
      .getUsers()
      .subscribe((responce: IUsers) => {
      if (email) {
        const currentUser: IUsersData | undefined = responce.data.find((item: IUsersData) => {
        return item.email.match(email)
        })
        this.user = currentUser
      }
    })
  }

}
