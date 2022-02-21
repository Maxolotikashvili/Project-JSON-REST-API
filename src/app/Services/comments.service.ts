import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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
  url: string = 'https://jsonplaceholder.typicode.com/comments';

  posts!: postType[]

  constructor(private http: HttpClient, private postsservice: PostsService) {
    this.postsservice.getPost().subscribe((value) => {
      this.posts = value;
    })
  }

  // 
  sendComment(comment: object): Observable<any> {
    return this.http.post<object>(this.url, comment)
  }

  //
  getComments() {
    return this.http.get<commentsType[]>(this.url)
    .pipe(catchError((error) => this.handleError(error)))
  }

  //
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    console.error('An Error Occurred:', error.error);
    } else {console.error(`Service Returned Code: ${error.status}, Body Was:`, error.error);}

    return throwError('Something happened; please Try Again Later.');
  }

}
