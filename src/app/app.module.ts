import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoApp } from './app.component';
import { TodoStoreService } from './todo-store.service';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { ListDetailComponent } from './list/list-detail/list-detail.component';

@NgModule({
  declarations: [
    TodoApp,
    HeaderComponent,
    ListComponent,
    FooterComponent,
    ListDetailComponent
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