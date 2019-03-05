import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T1QuestionOnePage } from './t1-question-one.page';

describe('T1QuestionOnePage', () => {
  let component: T1QuestionOnePage;
  let fixture: ComponentFixture<T1QuestionOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1QuestionOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T1QuestionOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
