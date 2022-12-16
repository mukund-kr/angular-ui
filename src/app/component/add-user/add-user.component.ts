import { HttpResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { DestroyService } from 'src/app/services/destroy.service';
import { UserService } from 'src/app/services/user.service';
import { AddUserInterface } from './add-user.interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
})
export class AddUserComponent implements OnInit {
  @Output() inputsSubmitted = new EventEmitter<AddUserInterface>();

  userTypeList: Array<string> = ['admin', 'user', 'editor', 'viewer'];

  countryList: Array<string> = [
    'India',
    'America',
    'China',
    'Japan',
    'Korea',
    'Australia',
    'Germany',
  ];

  form = new FormGroup({
    id: new FormControl('', [Validators.required]),

    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$'
      ),
    ]),

    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),

    userType: new FormControl('', [Validators.required]),

    country: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  public checkNullFieldValue(fieldValue: any): any {
    if (
      (typeof fieldValue == 'string' && fieldValue.trim() == '') ||
      fieldValue == null ||
      fieldValue == undefined
    ) {
      return null;
    }
    return fieldValue;
  }

  addUser(): void {
    console.log(this.form.value);
    let formValue = this.form.value;
    let userId = formValue.id == null ? NaN : parseInt(formValue.id);
    let userObj = new User(
      userId,
      this.checkNullFieldValue(formValue.username),
      this.checkNullFieldValue(formValue.email),
      this.checkNullFieldValue(formValue.mobile),
      this.checkNullFieldValue(formValue.country),
      this.checkNullFieldValue(formValue.userType),
      true,
      new Date().getTime()
    );
    this.userService.createUser(userObj).subscribe((res: HttpResponse<any>) => {
      if (res.status == 201) {
        this.toastr.success('User Added');
      }
    });
  }
}
