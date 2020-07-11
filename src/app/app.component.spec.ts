import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App Component', () => {
  let fixture: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render app servers', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-servers')).toBeTruthy();
  });
});
