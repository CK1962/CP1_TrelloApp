import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ITodo } from '../interfaces/itodo';
//import { TodoService } from 'src/services/todo.service';


@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  ngOnInit(): void {
  }
  closeResult: string;
  @Input() todo: ITodo;
  constructor(
    private modalService: NgbModal,
    //private todoService: TodoService
    ) {}

    deleteTodo() {
      //this.todoService.delete(this.todo);
    }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}