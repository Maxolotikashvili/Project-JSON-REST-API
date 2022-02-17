import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface photosType {
  albumId: number,
  id: number,
  title: string,
  url: any,
  thumbnailUrl: any
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() {
   return this.http.get<photosType[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
