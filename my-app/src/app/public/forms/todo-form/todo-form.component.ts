import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewTodo, Todo } from 'src/app/auth/shared/todo';
import { ILanguage } from 'src/app/ngrx/state/language.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Input() todo?: NewTodo;
  @Input() isEditing: boolean = false;
  @Output() onFormSubmit = new EventEmitter();
  lang$: Observable<ILanguage>;
  translate = {
    KA: {
      h5: 'დაამატე',
      todoTitle: 'სათაური',
      Completed: 'დასრულებულია',
      saveTodo: 'შეინახე',
      updateTodo: 'განაახლე',
    },
    EN: {
      h5: 'add new todo',
      todoTitle: 'todo title',
      Completed: 'Completed',
      saveTodo: 'save Todo',
      updateTodo: ' update Todo',
    },
    FR: {
      h5: 'ajouter une nouvelle tâche',
      todoTitle: 'Titre',
      Completed: 'Complété',
      saveTodo: 'enregistrer',
      updateTodo: 'mettre à jour',
    },
  };
  translated = {
    h5: 'დაამატე',
    todoTitle: 'სათაური',
    Completed: 'დასრულებულია',
    saveTodo: 'შეინახე',
    updateTodo: 'განაახლე',
  };
  constructor(private store: Store<any>) {
    this.lang$ = this.store.select('app');
  }

  ngOnInit(): void {
    this.lang$.subscribe((lang) => {
      //@ts-ignore
      this.translated = this.translate[lang.activeLang];
    });
  }

  onSubmit(form: NgForm) {
    this.onFormSubmit.emit(this.todo);
  }

  onUpdate(form: NgForm) {
    this.onFormSubmit.emit(this.todo);
  }
}
