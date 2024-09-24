import { AppComponent } from "./app.component";

//Describe the test suite
describe('AppComponent', () => {
  it('should have a defined title', () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  })
})