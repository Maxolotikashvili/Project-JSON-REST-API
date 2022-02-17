import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<postType[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
