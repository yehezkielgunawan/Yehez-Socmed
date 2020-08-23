import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private postService: PostService) { }
  userList: any;

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    this.postService.getUserList().subscribe((userListData) => {
     this.userList = userListData;
     console.log(this.userList);
    })
  }

}
