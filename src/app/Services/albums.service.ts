import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

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

  // 
  getAlbums() {
    return this.http.get<albumType[]>('https://jsonplaceholder.typicode.com/albums').pipe(catchError((error) => this.handleError(error)))
  }

    // 
    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
      console.error('An Error Occurred:', error.error);
      } else {console.error(`Service Returned Code: ${error.status}, Body Was:`, error.error);}
    
      return throwError('Something happened; please Try Again Later.');
    }

}
