import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfilPage } from './page-profil.page';

describe('PageProfilPage', () => {
  let component: PageProfilPage;
  let fixture: ComponentFixture<PageProfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
