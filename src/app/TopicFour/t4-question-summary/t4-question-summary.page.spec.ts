import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T4QuestionSummaryPage } from './t4-question-summary.page';

describe('T4QuestionSummaryPage', () => {
  let component: T4QuestionSummaryPage;
  let fixture: ComponentFixture<T4QuestionSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4QuestionSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T4QuestionSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
