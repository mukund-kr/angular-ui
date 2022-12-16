import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UsersComponent } from './component/users/users.component';
import { StatusFormatterPipe } from './pipes/status-formatter.pipe';
import { AdminUserComponent } from './component/admin-user/admin-user.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    StatusFormatterPipe,
    AddUserComponent,
    AdminUserComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCommonModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
