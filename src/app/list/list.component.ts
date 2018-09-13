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
stopEditing(todo: Todo, editedTitle: string) {
  if(editedTitle.length !== 0){
      todo.title = editedTitle.trim();
  }
  todo.editing = false;
}

updateEditingTodo(todo: Todo, editedTitle: string) {
  editedTitle = editedTitle.trim();
  todo.editing = false;

  if (editedTitle.length === 0) {
      return this.todoStore.remove(todo);
  }

  todo.title = editedTitle;
}

editTodo(todo: Todo) {
  todo.editing = true;
}
toggleCompletion(todo: Todo) {
  this.todoStore.toggleCompletion(todo);
}

remove(todo: Todo){
  this.todoStore.remove(todo);
}

  ngOnInit() {
  }

}
