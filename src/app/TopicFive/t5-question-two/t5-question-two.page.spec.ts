import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T5QuestionTwoPage } from './t5-question-two.page';

describe('T5QuestionTwoPage', () => {
  let component: T5QuestionTwoPage;
  let fixture: ComponentFixture<T5QuestionTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T5QuestionTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T5QuestionTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
