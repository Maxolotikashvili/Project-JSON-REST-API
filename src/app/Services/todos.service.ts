import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface todosType {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos() {
   return this.http.get<todosType[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
