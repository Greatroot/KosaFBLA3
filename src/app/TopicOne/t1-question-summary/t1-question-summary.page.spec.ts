import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T1QuestionSummaryPage } from './t1-question-summary.page';

describe('T1QuestionSummaryPage', () => {
  let component: T1QuestionSummaryPage;
  let fixture: ComponentFixture<T1QuestionSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1QuestionSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T1QuestionSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
