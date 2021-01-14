import { Component, OnInit, Input } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../User';
import * as _ from 'lodash';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  myForm = this.fb.group({
    fname: ['', [Validators.required], Validators.minLength(2)],
    lname: ['', [Validators.required], Validators.minLength(2)],
    email: ['', [Validators.email, Validators.required]],
    date: ['', [Validators.required]],
  });

  errorMessage: string = '';
  userList: User[] = [];

  col: any = ['fname', 'lname', 'email', 'date'];
  sortDirection: any = 'asc';

  columnName: string = 'fname';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userList = JSON.parse(sessionStorage.getItem('key') || '');
  }

  storeValues() {
    this.errorMessage = '';

    if (this.myForm.invalid) {
      this.errorMessage = 'Error in filling form.';
    } else {
      this.userList.push(this.myForm.value);
      sessionStorage.setItem('key', JSON.stringify(this.userList));
      console.log(this.userList);
    }
  }

  sorting(one: number) {
    this.columnName = this.col[one];
    console.log(this.columnName);
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.userList = _.orderBy(
      this.userList,
      [this.columnName],
      [this.sortDirection]
    );
  }
}
