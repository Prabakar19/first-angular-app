import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../services/APIService/apiservice.service';

@Component({
  selector: 'app-dummyclient',
  templateUrl: './dummyclient.component.html',
  styleUrls: ['./dummyclient.component.css'],
})
export class DummyclientComponent implements OnInit {
  userList = [];

  constructor(private apiservice: APIServiceService) {
    this.getUserDetails();
  }

  ngOnInit(): void {}

  getUserDetails() {
    this.apiservice.getDetail().subscribe((data) => {
      this.userList = data;
      console.log(this.userList);
    });
  }
}
