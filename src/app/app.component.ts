import { Component } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { StatusCode } from './enums/status-code.enum';
// import { confirm-modal } from './confirm-modal/confirm-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
  todoList: ITodo[] = [];
  todoTitle: string;

  ngOnInit() {
      this.todoTitle = '';
      this.todoList = [
          { id: 0, title: 'Finish CP1', status: StatusCode.NotStarted },
      ];
  }

  addTodo(): void {
      this.todoList.push({
          id: 0,
          title: this.todoTitle,
          status: StatusCode.NotStarted
      });

      this.todoTitle = '';
  }
  deleteTodo(todo: any) {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
  }
}
