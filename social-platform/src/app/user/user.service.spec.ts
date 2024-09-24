import { TestBed } from '@angular/core/testing'; //TestBed API is Interface we use for Angular Testing.

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService; //Instance fetched by TestBed

  //Fresh instance of User Service
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService)
  })

  //As long as it's a service will have true values
  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  //Check if atleast 1 user is fetched
  it(('should get users'), () => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
    })
  })

});
