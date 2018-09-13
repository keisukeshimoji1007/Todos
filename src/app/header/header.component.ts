import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todoStore: TodoStoreService;
  newTodoText = '';


  constructor(todoStore:TodoStoreService) { 
    this.todoStore = todoStore;
  }
  addTodo() {
    if (this.newTodoText.trim().length) {
        this.todoStore.add(this.newTodoText);
        this.newTodoText = '';
    }
  }

 ngOnInit() {
  }

}
