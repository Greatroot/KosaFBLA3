import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T4QuestionFivePage } from './t4-question-five.page';

describe('T4QuestionFivePage', () => {
  let component: T4QuestionFivePage;
  let fixture: ComponentFixture<T4QuestionFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4QuestionFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T4QuestionFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
