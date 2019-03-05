import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T3QuestionTwoPage } from './t3-question-two.page';

describe('T3QuestionTwoPage', () => {
  let component: T3QuestionTwoPage;
  let fixture: ComponentFixture<T3QuestionTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3QuestionTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T3QuestionTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
