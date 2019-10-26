import { Component, OnInit, Input } from '@angular/core';
import { StatusCode } from '../enums/status-code.enum';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'list-of-todo-items',
  templateUrl: './list-of-todo-items.component.html',
  styleUrls: ['./list-of-todo-items.component.scss']
})
export class ListOfTodoItemsComponent implements OnInit {

  constructor(private TodoService: TodoService) { }

  @Input() header: string;
  @Input() statusCode: StatusCode;

  ngOnInit() {
  }

  get filteredArray(): ITodo[] {
    return this.TodoService.todoList.filter(x =>
        x.status===this.statusCode
    );
}

}
