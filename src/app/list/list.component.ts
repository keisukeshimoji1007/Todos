import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../todo-store.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit { 
  
  todoStore: TodoStoreService;
 
  constructor(todoStore:TodoStoreService) { 
    
    this.todoStore = todoStore;
}

  ngOnInit() {
  }

}
