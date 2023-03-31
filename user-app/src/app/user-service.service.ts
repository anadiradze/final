import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user-list/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(page: number, size: number) {
    const url = `${this.apiUrl}/users?_page=${page}&_size=${size}`;
    return this.http.get(url);
  }
  getUser(userId: string) {
    return this.http.get<IUser>(`${this.apiUrl}/user?id=${userId}`);
  }
  getFriends(userId: string, page: number, size: number) {
    const url = `${this.apiUrl}/friends?UserId=${userId}&_page=${page}&_size=${size}`;
    return this.http.get(url);
  }

  onScroll(
    page: number,
    hasMoreData: boolean,
    isLoading: boolean,
    element: HTMLElement,
    callback: Function
  ): void {
    const isScrolledToBottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (isScrolledToBottom && !isLoading && hasMoreData) {
      page++;
      callback(page);
    }
  }
}
