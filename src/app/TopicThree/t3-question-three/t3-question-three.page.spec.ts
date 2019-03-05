import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T3QuestionThreePage } from './t3-question-three.page';

describe('T3QuestionThreePage', () => {
  let component: T3QuestionThreePage;
  let fixture: ComponentFixture<T3QuestionThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3QuestionThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T3QuestionThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
