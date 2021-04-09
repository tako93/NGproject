import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FireStoreService } from '../../core/firestore.service';
import { Todo, NewTodo } from '../shared/todo';
import { Store } from '@ngrx/store';
import { reset, increment, decrement } from './state/counter.actions';
import { ICounter } from './state/counter.interface';
import { ILanguage } from 'src/app/ngrx/state/language.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  title: string = 'account template string';
  list: Todo[] = [];
  isEditing: boolean = false;
  newTodo: NewTodo = {
    userId: '',
    title: '',
    completed: false,
  };

  counter$: Observable<ICounter>;
  lang$: Observable<ILanguage>
  translate = {
    KA: {
      title: 'მთვლელი',
      h3: 'შენი ექაუნთი'
    },
    EN: {
      title: 'Counter',
       h3: 'Your Account'
    },
    FR: {
      title: 'Compteur',
      h3: 'Votre compte'
    },
  };
  translated = {
    title: 'მთვლელი',
    h3: 'შენი ექაუნთი'
  }
  constructor(private fireStore: FireStoreService, private store: Store<any>) {
    this.counter$ = this.store.select('counter');
    this.lang$ = this.store.select('app')
  }

  ngOnInit(): void {
    console.log('account ngOnInit');
    this.loadData();
    this.counter$.subscribe((counter: ICounter) => {
      console.log('[acc@counter]', this.counter$);
    });
    this.lang$.subscribe((lang) => {
      //@ts-ignore
      this.translated = this.translate[lang.activeLang];
    })
  }

  loadData() {
    this.fireStore.getCollection('todos').subscribe((task) => {
      this.list = task;
      // console.log(this.list);
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

  onTodoUpdate(todo: Todo) {
    this.isEditing = true;
    this.newTodo = todo;
  }

  onSubmit(newTodo: Todo) {
    if (this.isEditing) {
      this.fireStore.updateItem('todos', newTodo.id, {
        title: newTodo.title,
        completed: newTodo.completed,
      });
      this.isEditing = false;
      this.newTodo = {
        userId: '',
        title: '',
        completed: false,
      };
    } else {
      this.fireStore.createItem('todos', newTodo).then((task) => {
        console.log(task);
      });
    }
  }

  getClasses(item: Todo) {
    return {
      'list-group-item-primary': item.completed,
      'list-group-item-warning': !item.completed,
      'list-group-item': true,
    };
  }

  ngOnDestroy(): void {
    console.log('account ngOnDestroy');
  }

  onIncrement(): void {
    this.store.dispatch(increment());
  }
  onReset(): void {
    this.store.dispatch(reset());
  }
  onDecrement(): void {
    this.store.dispatch(decrement());
  }
}
