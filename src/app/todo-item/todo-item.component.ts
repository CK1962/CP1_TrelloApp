import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';
import { StatusCode } from '../enums/status-code.enum';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  constructor(private TodoService: TodoService) { }

  @Input() todo: ITodo;
  isEditing: Boolean= false;

  ngOnInit() {
  }

  updateStatus(statusCode: StatusCode): void {
    this.TodoService.updateStatus(this.todo, statusCode)
  }

  updateTitle(): void {
    this.isEditing=true;
  }

  updateTitleSave(): void{
    this.isEditing=false;
  }

  getBackgroundColor() {
    if (this.todo.status===StatusCode.InProgress) {
      return '#ffe082';
    }
    return '#eeeeee';
  }
}
