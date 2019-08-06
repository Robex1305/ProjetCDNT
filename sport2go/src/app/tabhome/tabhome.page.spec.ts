import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabhomePage } from './tabhome.page';

describe('TabhomePage', () => {
  let component: TabhomePage;
  let fixture: ComponentFixture<TabhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabhomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
