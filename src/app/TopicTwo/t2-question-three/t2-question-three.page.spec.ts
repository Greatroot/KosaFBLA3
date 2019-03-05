import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T2QuestionThreePage } from './t2-question-three.page';

describe('T2QuestionThreePage', () => {
  let component: T2QuestionThreePage;
  let fixture: ComponentFixture<T2QuestionThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2QuestionThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T2QuestionThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
