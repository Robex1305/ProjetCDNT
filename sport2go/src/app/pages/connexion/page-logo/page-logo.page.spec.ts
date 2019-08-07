import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLogoPage } from './page-logo.page';

describe('PageLogoPage', () => {
  let component: PageLogoPage;
  let fixture: ComponentFixture<PageLogoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLogoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
