import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

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
   return this.http.get<todosType[]>('https://jsonplaceholder.typicode.com/todos').pipe(catchError((error) => this.handleError(error)))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    console.error('An Error Occurred:', error.error);
    } else {console.error(`Service Returned Code: ${error.status}, Body Was:`, error.error);}
  
    return throwError('Something happened; please Try Again Later.');
  }

}
