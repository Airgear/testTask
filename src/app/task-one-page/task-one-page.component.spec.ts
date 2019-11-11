import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOnePageComponent } from './task-one-page.component';

describe('TaskOnePageComponent', () => {
  let component: TaskOnePageComponent;
  let fixture: ComponentFixture<TaskOnePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskOnePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
