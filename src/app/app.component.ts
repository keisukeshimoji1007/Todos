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

    constructor(todoStore: TodoStoreService) {
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

    removeCompleted() {
        this.todoStore.removeCompleted();
    }

    toggleCompletion(todo: Todo) {
        this.todoStore.toggleCompletion(todo);
    }

    remove(todo: Todo){
        this.todoStore.remove(todo);
    }

    addTodo() {
        if (this.newTodoText.trim().length) {
            this.todoStore.add(this.newTodoText);
            this.newTodoText = '';
        }
    }
}