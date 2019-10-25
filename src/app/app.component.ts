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

    //filteredBy = null;
    todoId: number = 1;
    title = 'Todos';
    //todoList: ITodo[] = [];
    todoTitle: string;

    ngOnInit() {
        this.todoTitle = '';
        //this.todoList = [
        //   { id: 0, title: 'Finish CP1', status: StatusCode.NotStarted },
        //];
    }

   filteredArray(statusCode:StatusCode): ITodo[] {
            return this.TodoService.todoList.filter(x =>
                x.status===statusCode
            );
    }

    get filteredArrayNotStarted(): ITodo[] {
        return this.filteredArray(StatusCode.NotStarted);
    }

    get filteredArrayInProgress(): ITodo[] {
        return this.filteredArray(StatusCode.InProgress);
    }

    get filteredArrayCompleted(): ITodo[] {
        return this.filteredArray(StatusCode.Completed);
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

    updateStatus(todo: ITodo, statusCode: StatusCode): void {
        this.TodoService.updateStatus(todo, statusCode)
    }



}
