import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskThreePageComponent } from './task-three-page.component';

describe('TaskThreePageComponent', () => {
  let component: TaskThreePageComponent;
  let fixture: ComponentFixture<TaskThreePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskThreePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskThreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
