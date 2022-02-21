import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

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
    return this.http.get<photosType[]>('https://jsonplaceholder.typicode.com/photos')
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
