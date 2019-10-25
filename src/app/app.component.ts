import { Component } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { StatusCode } from './enums/status-code.enum';
import { TodoService } from './services/todo.service';
// import { confirm-modal } from './confirm-modal/confirm-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private TodoService: TodoService) { }

  title = 'Todos';
  //todoList: ITodo[] = [];
  todoTitle: string;

  ngOnInit() {
      this.todoTitle = '';
      //this.todoList = [
       //   { id: 0, title: 'Finish CP1', status: StatusCode.NotStarted },
      //];
  }

  get filteredArray(): ITodo[] {
    // if (!this.status) {
       return this.TodoService.todoList;
    // }
    // else {
    //   return this.TodoService.todoList.filter(x =>
    //     this.status === "done" ? x.isDone : !x.isDone
    //   );
    // }
  }

  addTodo(): void {
      this.TodoService.add({
          id: 0,
          title: this.todoTitle,
          status: StatusCode.NotStarted
      });

      this.todoTitle = '';
  }

}
