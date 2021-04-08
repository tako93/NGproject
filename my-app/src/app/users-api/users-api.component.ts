import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { IUsersData, IUsers } from './users-api';
import { UsersService } from './users-api.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  getUsersStateSelector,
  getUsersSelector,
} from './state/users.selector';
import { setUsersAction } from './state/users.actions';
@Component({
  selector: 'app-users-api',
  templateUrl: './users-api.component.html',
  styleUrls: ['./users-api.component.scss'],
})
export class UsersApiComponent implements OnInit, OnChanges, OnDestroy {
  // p: number = 1;
  usersList: IUsersData[] = [];
  // filterData: FilterForm = this._usersService.filterData
  constructor(
    private _usersService: UsersService,
    private route: ActivatedRoute,
    private store: Store
  ) {
    // @ts-ignore
    this.store.select(getUsersSelector).subscribe((data) => {});
  }

  ngOnChanges(): void {
    console.log('changed');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }

  ngOnInit(): void {
    const responce: IUsers = this.route.snapshot.data['usersResponse'];
    this.usersList = responce.data;
    // @ts-ignore
    this.store.dispatch(setUsersAction({users: responce.data}))
  }
}
