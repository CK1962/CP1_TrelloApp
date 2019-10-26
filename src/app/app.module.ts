import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListOfTodoItemsComponent } from './list-of-todo-items/list-of-todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    TodoItemComponent,
    ListOfTodoItemsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
