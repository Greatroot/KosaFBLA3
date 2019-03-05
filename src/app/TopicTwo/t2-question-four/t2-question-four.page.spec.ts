import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T2QuestionFourPage } from './t2-question-four.page';

describe('T2QuestionFourPage', () => {
  let component: T2QuestionFourPage;
  let fixture: ComponentFixture<T2QuestionFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2QuestionFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T2QuestionFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
