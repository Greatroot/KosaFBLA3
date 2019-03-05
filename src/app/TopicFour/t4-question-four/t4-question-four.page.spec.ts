import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T4QuestionFourPage } from './t4-question-four.page';

describe('T4QuestionFourPage', () => {
  let component: T4QuestionFourPage;
  let fixture: ComponentFixture<T4QuestionFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4QuestionFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T4QuestionFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
