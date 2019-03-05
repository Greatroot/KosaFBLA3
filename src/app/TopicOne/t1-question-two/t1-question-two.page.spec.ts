import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T1QuestionTwoPage } from './t1-question-two.page';

describe('T1QuestionTwoPage', () => {
  let component: T1QuestionTwoPage;
  let fixture: ComponentFixture<T1QuestionTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1QuestionTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T1QuestionTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
