import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

import { AddUserComponent } from './add-user.component';

fdescribe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [BrowserAnimationsModule, 
        HttpClientModule, 
        ReactiveFormsModule, 
        FormsModule,
        ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
      }),],
      providers: [UserService, ToastrService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
