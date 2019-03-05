import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T5QuestionOnePage } from './t5-question-one.page';

describe('T5QuestionOnePage', () => {
  let component: T5QuestionOnePage;
  let fixture: ComponentFixture<T5QuestionOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T5QuestionOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T5QuestionOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
