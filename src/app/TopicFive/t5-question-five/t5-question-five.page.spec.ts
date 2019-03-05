import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T5QuestionFivePage } from './t5-question-five.page';

describe('T5QuestionFivePage', () => {
  let component: T5QuestionFivePage;
  let fixture: ComponentFixture<T5QuestionFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T5QuestionFivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T5QuestionFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
