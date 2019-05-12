import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingAndGuessingComponent } from './greeting-and-guessing.component';

describe('GreetingAndGuessingComponent', () => {
  let component: GreetingAndGuessingComponent;
  let fixture: ComponentFixture<GreetingAndGuessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingAndGuessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingAndGuessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
