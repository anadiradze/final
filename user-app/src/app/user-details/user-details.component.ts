import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Ifriends } from '../user-list/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: any;
  friends: Ifriends[] = [];
  page = 0;
  size = 10;
  isLoading = false;
  hasMoreData = true;

  @ViewChild('friendsList', { static: false }) friendsList?: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.getUser(userId);
      this.getFriends(userId);
    }
  }

  getUser(userId: string) {
    this.isLoading = true;
    this.userService.getUser(userId).subscribe((data: any) => {
      this.user = data[0];
      this.isLoading = false;
    });
  }

  getFriends(userId: string) {
    this.isLoading = true;
    this.userService
      .getFriends(userId, this.page, this.size)
      .subscribe((data: any) => {
        this.friends = this.friends.concat(data);
        this.isLoading = false;
        if (data < this.size) {
          this.hasMoreData = false;
        }
        this.friends = this.friends.filter((obj) => obj.id !== userId);
      });
  }

  onScrollFriends() {
    const friendsListEl = this.friendsList?.nativeElement;
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.onScroll(
      this.page,
      this.hasMoreData,
      this.isLoading,
      friendsListEl,
      (page: number) => {
        if (userId) {
          this.page = page;
          this.getFriends(userId);
        }
      }
    );
  }

  getUserWithFriends(FriendsId: string) {
    if (FriendsId) {
      this.getUser(FriendsId);
      this.friends = [];
      this.getFriends(FriendsId);
      this.router.navigateByUrl(`user/${FriendsId}`);
    }
  }

  goToMainPage() {
    this.router.navigate(['/']);
  }
}
