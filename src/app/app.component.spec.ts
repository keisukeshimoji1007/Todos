import { TestBed, async } from '@angular/core/testing';
import { TodoApp } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoApp
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TodoApp);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'todoapp'`, async(() => {
    const fixture = TestBed.createComponent(TodoApp);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('todoapp');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TodoApp);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to todoapp!');
  }));
});
