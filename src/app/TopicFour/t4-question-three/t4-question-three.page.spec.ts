import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T4QuestionThreePage } from './t4-question-three.page';

describe('T4QuestionThreePage', () => {
  let component: T4QuestionThreePage;
  let fixture: ComponentFixture<T4QuestionThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4QuestionThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T4QuestionThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
