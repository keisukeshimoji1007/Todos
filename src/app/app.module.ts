import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoApp } from './app.component';
import { TodoStore } from './store';

@NgModule({
  declarations: [
    TodoApp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoStore],
  bootstrap: [TodoApp]
})
export class AppModule { }