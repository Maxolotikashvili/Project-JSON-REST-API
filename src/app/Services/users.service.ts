import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<userType[]>('https://jsonplaceholder.typicode.com/users')
  }
}
