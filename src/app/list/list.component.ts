import { Component, OnInit, Output } from '@angular/core';
import { TodoStoreService } from '../todo-store.service';
import { Todo } from '../todo';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit { 
  
  @Output() TodoStoreService = new EventEmitter();
  todoStore: TodoStoreService;
 
  constructor(todoStore:TodoStoreService) { 

    this.todoStore = todoStore;
}

  ngOnInit() {
  }

}
