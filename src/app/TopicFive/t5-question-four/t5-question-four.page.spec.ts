import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T5QuestionFourPage } from './t5-question-four.page';

describe('T5QuestionFourPage', () => {
  let component: T5QuestionFourPage;
  let fixture: ComponentFixture<T5QuestionFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T5QuestionFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T5QuestionFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
