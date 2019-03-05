import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T1QuestionThreePage } from './t1-question-three.page';

describe('T1QuestionThreePage', () => {
  let component: T1QuestionThreePage;
  let fixture: ComponentFixture<T1QuestionThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1QuestionThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T1QuestionThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
