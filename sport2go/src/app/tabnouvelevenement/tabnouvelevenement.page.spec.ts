import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabnouvelevenementPage } from './tabnouvelevenement.page';

describe('TabnouvelevenementPage', () => {
  let component: TabnouvelevenementPage;
  let fixture: ComponentFixture<TabnouvelevenementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabnouvelevenementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabnouvelevenementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
