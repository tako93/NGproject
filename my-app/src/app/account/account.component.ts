import { Component, OnInit } from '@angular/core';
import { FireStoreService } from '../core/firestore.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

 title: string = 'account template string';
  list: Array<any> = [];

  constructor(private fireStore: FireStoreService) {}

  ngOnInit(): void {
    console.log('Account ngOnInit');
    this.loadData();
  }

  loadData() {
    this.fireStore.getCollection('todos').subscribe((task) => {
      this.list = task;
    });
  }

  async onAddItem() {
    this.fireStore
      .createItem('todos', {
        completed: false,
        title: 'Super Title',
      })
      .then((task) => {});
  }

  async onRemove(id: string) {
    console.log('ID to remove', id);
    const task = await this.fireStore.removeItemById('todos', id);
    console.log(task);
  }

  ngOnDestroy(): void {
    console.log('Account ngOnDestroy');
  }

}
