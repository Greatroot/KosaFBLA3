import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T3QuestionFivePage } from './t3-question-five.page';

describe('T3QuestionFivePage', () => {
  let component: T3QuestionFivePage;
  let fixture: ComponentFixture<T3QuestionFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3QuestionFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T3QuestionFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
