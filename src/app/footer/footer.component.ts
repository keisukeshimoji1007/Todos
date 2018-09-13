import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../todo-store.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  todoStore: TodoStoreService;


  constructor(todoStore: TodoStoreService) { 
    this.todoStore = todoStore;
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
}
  ngOnInit() {
    
  }

}
