import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTwoPageComponent } from './task-two-page.component';

describe('TaskTwoPageComponent', () => {
  let component: TaskTwoPageComponent;
  let fixture: ComponentFixture<TaskTwoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTwoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
