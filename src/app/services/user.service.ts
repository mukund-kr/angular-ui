import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from '../mock-users';
import { User } from '../user';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:3000/users';  // URL to web api
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    const users = of(USERS);
    this.messageService.add('UserService: fetched users');
    // return this.http.get<User[]>(this.usersUrl)
    return users;
  }
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
}
}
