import { Component } from '@angular/core';
import { TodoStoreService } from './todo-store.service';
import { Todo } from './todo';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TodoApp {
    todoStore: TodoStoreService;
    newTodoText = '';
    title = 'Todos';

    constructor() { }
}

