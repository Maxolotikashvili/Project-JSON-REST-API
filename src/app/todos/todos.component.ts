import { Component, OnInit } from '@angular/core';
import { TodosService, todosType } from '../Services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos!: todosType[];

  constructor(private todosservice: TodosService) { }

  ngOnInit(): void {
    this.todosservice.getTodos().subscribe((value) => {
      this.todos = value;
    });
    
  }

}
