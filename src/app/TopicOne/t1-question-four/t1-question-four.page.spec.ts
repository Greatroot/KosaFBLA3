import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T1QuestionFourPage } from './t1-question-four.page';

describe('T1QuestionFourPage', () => {
  let component: T1QuestionFourPage;
  let fixture: ComponentFixture<T1QuestionFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1QuestionFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T1QuestionFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
