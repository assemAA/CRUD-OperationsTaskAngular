import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl =  "http://localhost:3008/users" ;
  constructor(public myClient : HttpClient) {}

  getAllUsers() {
    return this.myClient.get<User[]>(this.baseUrl);
  }

  getUserById<User>(userId:number) {
    return this.myClient.get(`${this.baseUrl}/${userId}`)
  }

  deleteUser(userId : number) {
    return this.myClient.delete(`${this.baseUrl}/${userId}`)
  }

  addNewUser (user : User) {
    return this.myClient.post(this.baseUrl , user)
  }

  editUserData (user : User , userId : number) {
    return this.myClient.put(`${this.baseUrl}/${userId}` , user)
  }
}
