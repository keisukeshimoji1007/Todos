import { Component } from '@angular/core';
import {TodoStore, Todo} from './store';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TodoApp {
    todoStore: TodoStore;
    newTodoText = '';

    constructor(todoStore: TodoStore) {
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