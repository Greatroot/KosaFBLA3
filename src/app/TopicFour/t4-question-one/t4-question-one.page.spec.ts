import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T4QuestionOnePage } from './t4-question-one.page';

describe('T4QuestionOnePage', () => {
  let component: T4QuestionOnePage;
  let fixture: ComponentFixture<T4QuestionOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4QuestionOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T4QuestionOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
