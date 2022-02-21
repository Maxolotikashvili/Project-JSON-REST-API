import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface postType {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url = 'https://jsonplaceholder.typicode.com/posts'
  
  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<postType[]>(this.url)
    .pipe(catchError((error) => this.handleError(error)))
  }

  writePost(newpost: object) {
    return this.http.post(this.url, newpost)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    console.error('An Error Occurred:', error.error);
    } else {console.error(`Service Returned Code: ${error.status}, Body Was:`, error.error);}

    return throwError('Something happened; please Try Again Later.');
  }



}
