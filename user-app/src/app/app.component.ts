import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { IUser } from './user-list/models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 /*  users: any[] = [];
  friends: any[] = [];
  page = 0;
  size = 10;
  user!: IUser;
  userId = "1"; 
  constructor(private userService: UserServiceService) {}

  getUsers() {
    console.log('getUsers work');
    this.userService.getUsers(this.page, this.size).subscribe((data: any) => {
      this.users = this.users.concat(data);
      this.page += this.size;
      console.log(this.users);
    });
  }
  getUser(userId: string) {
    this.userService.getUser(userId).subscribe((data: IUser) => {
      this.user = data;
    });
  }
  getFriends(userId: string, page: number, size: number) {
    this.userService
      .getFriends(this.userId, this.page, this.size)
      .subscribe((data: any) => {
        this.friends = this.friends.concat(data);
        this.page += this.size;
        console.log(this.friends)
      });
  } */
}
