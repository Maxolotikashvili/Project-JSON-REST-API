import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface albumType {
  userId: number,
  id: number,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get<albumType[]>('https://jsonplaceholder.typicode.com/albums')
  }
}
