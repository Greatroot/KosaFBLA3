import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T3QuestionFourPage } from './t3-question-four.page';

describe('T3QuestionFourPage', () => {
  let component: T3QuestionFourPage;
  let fixture: ComponentFixture<T3QuestionFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3QuestionFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T3QuestionFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
