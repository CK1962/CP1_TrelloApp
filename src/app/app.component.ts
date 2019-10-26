import { Component } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { StatusCode } from './enums/status-code.enum';
import { TodoService } from './services/todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private TodoService: TodoService) { }

    todoId: number = 1;
    title = 'Todos';
    todoTitle: string;

    ngOnInit() {
        this.todoTitle = '';
    }

    addTodo(): void {
        this.todoId++;
        this.TodoService.add({
            id: this.todoId,
            title: this.todoTitle,
            status: StatusCode.NotStarted
        });

        this.todoTitle = '';
    }





}
