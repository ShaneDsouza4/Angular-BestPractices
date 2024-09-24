import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    { id: 1, name: "Shane" },
    { id: 2, name: "Redd" },
    { id: 3, name: "Seth " }
  ]

  constructor() { }

  getUsers() {
    return of(this.users);
  }
}
