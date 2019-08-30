import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsEvenementPage } from './page-details-evenement.page';

describe('PageDetailsEvenementPage', () => {
  let component: PageDetailsEvenementPage;
  let fixture: ComponentFixture<PageDetailsEvenementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailsEvenementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailsEvenementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
