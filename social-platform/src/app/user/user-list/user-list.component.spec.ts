import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => { //Describe creates test suite
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>; //Fixture is like Wrapper to call additional functionalities
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => { //Called before every unit test

    await TestBed.configureTestingModule({
      declarations: [UserListComponent], //Declaraion for comp, Inject for Service
      providers: [UserService] //We don't want to depend on service to test the component
    }).compileComponents() //Shows that component got compiled succesfully

    fixture = TestBed.createComponent(UserListComponent); //Inside the fixture wrapper we have our component
    component = fixture.componentInstance; //From the fixture we take the component


    //fixture.detectChanges(); //Trigger the lifecycle to update the data binding.

    userService = TestBed.inject(UserService);
    //Spy on the actual service file
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      { id: 1, name: "Shane" },
      { id: 2, name: "Redd" },
      { id: 3, name: "Seth " }
    ]))
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //ngOnini getting data
  it('should retrieve users from the UserService on init', () => {
    fixture.detectChanges(); //Allows to detect lifecycle changes
    expect(userServiceSpy).toHaveBeenCalled(); //Should be true, when getUsers() returns
  })

  //If refresh button gets clickes
  it('should retrieve users from the UserService when the refresh button is clicked.', () => {

    //start lifecycle
    fixture.detectChanges();

    //ngOnit calls users
    userServiceSpy.calls.reset();

    //Find the button on the HTML
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    //Expect there has been a call
    expect(userServiceSpy).toHaveBeenCalled();
  });

});
