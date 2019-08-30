import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNouvelEvenementPage } from './page-nouvel-evenement.page';

describe('PageNouvelEvenementPage', () => {
  let component: PageNouvelEvenementPage;
  let fixture: ComponentFixture<PageNouvelEvenementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNouvelEvenementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNouvelEvenementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
