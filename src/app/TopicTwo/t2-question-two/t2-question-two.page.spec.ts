import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T2QuestionTwoPage } from './t2-question-two.page';

describe('T2QuestionTwoPage', () => {
  let component: T2QuestionTwoPage;
  let fixture: ComponentFixture<T2QuestionTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2QuestionTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T2QuestionTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
