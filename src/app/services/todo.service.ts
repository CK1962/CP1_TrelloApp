import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [];
  constructor() { }

  delete(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  getAll(): ITodo[] {
    return this.todoList;
  }

  add(todo: ITodo) {
    this.todoList.push(todo);
  }
}
