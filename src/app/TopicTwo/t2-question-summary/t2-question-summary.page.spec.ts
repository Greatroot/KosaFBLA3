import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T2QuestionSummaryPage } from './t2-question-summary.page';

describe('T2QuestionSummaryPage', () => {
  let component: T2QuestionSummaryPage;
  let fixture: ComponentFixture<T2QuestionSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2QuestionSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T2QuestionSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
