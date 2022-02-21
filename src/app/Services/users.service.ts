import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface userType {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://jsonplaceholder.typicode.com/users'
  
  constructor(private http: HttpClient) { }

  // 
  getUsers() {
    return this.http.get<userType[]>(this.url).pipe(catchError((error) => this.handleError(error)))
  }

  // 
  sendUser(newusername: object) {
    return this.http.post(this.url, newusername)
  }

  // 
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    console.error('An Error Occurred:', error.error);
    } else {console.error(`Service Returned Code: ${error.status}, Body Was:`, error.error);}
  
    return throwError('Something happened; please Try Again Later.');
  }

}
