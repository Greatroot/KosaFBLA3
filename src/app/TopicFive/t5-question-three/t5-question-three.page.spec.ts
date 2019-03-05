import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T5QuestionThreePage } from './t5-question-three.page';

describe('T5QuestionThreePage', () => {
  let component: T5QuestionThreePage;
  let fixture: ComponentFixture<T5QuestionThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T5QuestionThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T5QuestionThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
