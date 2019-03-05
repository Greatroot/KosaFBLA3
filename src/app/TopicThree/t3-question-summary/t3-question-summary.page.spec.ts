import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T3QuestionSummaryPage } from './t3-question-summary.page';

describe('T3QuestionSummaryPage', () => {
  let component: T3QuestionSummaryPage;
  let fixture: ComponentFixture<T3QuestionSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3QuestionSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T3QuestionSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
