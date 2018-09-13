import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoApp } from './app.component';
import { TodoStoreService } from './todo-store.service';

@NgModule({
  declarations: [
    TodoApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoStoreService],
  bootstrap: [TodoApp]
})
export class AppModule { }