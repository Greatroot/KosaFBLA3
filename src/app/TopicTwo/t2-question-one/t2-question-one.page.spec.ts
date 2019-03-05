import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T2QuestionOnePage } from './t2-question-one.page';

describe('T2QuestionOnePage', () => {
  let component: T2QuestionOnePage;
  let fixture: ComponentFixture<T2QuestionOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2QuestionOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T2QuestionOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
