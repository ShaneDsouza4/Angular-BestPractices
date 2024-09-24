import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = []



  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.refreshUsers()
  }

  refreshUsers(): void {
    this.userService.getUsers().subscribe(x => this.users = x);
  }

}
