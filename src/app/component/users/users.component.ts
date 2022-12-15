import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  selectedUser?: User;
  loading:boolean = false;

  users: User[] = [];
  
  dateDisplayFormat = "MMM d, y, h:mm:ss a"
  
  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.setLoading(true);
    this.userService.getUsers()
        .subscribe((response:HttpResponse<User[]>) => {
          this.users = response.body!=null?response.body:[];
          this.setLoading(false);
        },(error:HttpErrorResponse)=>{
          this.setLoading(false); 
        });           
  }

  deleteUser(id:number):void{
    this.setLoading(true);
    this.userService.deleteUser(id)
    .subscribe((response:HttpResponse<any>)=>{
      if (response.status==200){
        this.toastr.error("User deleted");
        this.getUsers();
      }
   })
  }

  setLoading(status:boolean):void{
    this.loading = status;
  }

  public openAddUser() {
    this.router.navigate(["/add-user"]);
  }

}
