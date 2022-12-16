import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
})
export class AdminUserComponent {
  loading: boolean = false;

  users: User[] = [];

  dateDisplayFormat = 'MMM d, y, h:mm:ss a';

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAdminUsers();
  }

  getAdminUsers(): void {
    this.setLoading(true);
    this.userService.getUsers().subscribe(
      (response: HttpResponse<User[]>) => {
        this.users = response.body != null ? response.body : [];
        this.users = this.users.filter((u) => u.type == 'admin');
        this.setLoading(false);
      },
      (error: HttpErrorResponse) => {
        this.setLoading(false);
      }
    );
  }

  setLoading(status: boolean): void {
    this.loading = status;
  }
}
