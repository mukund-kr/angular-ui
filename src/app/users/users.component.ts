import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { User } from '../user';
import { UserService } from './../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  selectedUser?: User;

  users: User[] = [];

  constructor(private userService: UserService, private messageService: MessageService) { }
  
  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.messageService.add(`UsersComponent: Selected user id=${user.id}`);
  }
  
  getUsers(): void {
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }

}
