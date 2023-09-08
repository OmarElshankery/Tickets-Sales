import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:3000/users';
  constructor(private client: HttpClient) {}

  getAllUsers() {
    return this.client.get(this.baseUrl);
  }
  addUser(user: any) {
    return this.client.post(`${this.baseUrl}`, user);
  }
}
