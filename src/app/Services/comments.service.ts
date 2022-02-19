import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { PostsService, postType } from './posts.service';

export interface commentsType {
  postId: number,
  id: number,
  name: string,
  email: any,
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  posts!: postType[]

  constructor(private http: HttpClient, private postsservice: PostsService) {
    this.postsservice.getPost().subscribe((value) => {
      this.posts = value;
    })
  }

  //
  getComments() {
    return this.http.get<commentsType[]>('https://jsonplaceholder.typicode.com/comments').pipe(catchError((error) => this.handleError(error)))
  }

  //
  findId(userId: number) {
      const text = this.posts?.find((data) => data.id === userId);
      return of(text?.title)
  }

  //
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    console.error('An Error Occurred:', error.error);
    } else {console.error(`Service Returned Code: ${error.status}, Body Was:`, error.error);}

    return throwError('Something happened; please Try Again Later.');
  }

}
