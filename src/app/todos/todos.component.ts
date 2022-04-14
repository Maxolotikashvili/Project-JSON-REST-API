import { Component, OnInit } from '@angular/core';
import { TodosService, todosType } from '../Services/todos.service';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!: todosType[];

  faCheck = faCheck;
  faXmark = faXmark;

  constructor(private todosservice: TodosService) { }

  ngOnInit(): void {
    this.todosservice.getTodos().subscribe((value) => {
      this.todos = value;
    });

  }

}
