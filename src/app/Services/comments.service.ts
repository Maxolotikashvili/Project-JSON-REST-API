import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get<commentsType[]>('https://jsonplaceholder.typicode.com/comments')
  }
}
