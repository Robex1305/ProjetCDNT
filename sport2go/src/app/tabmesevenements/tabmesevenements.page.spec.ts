import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabmesevenementsPage } from './tabmesevenements.page';

describe('Tab1Page', () => {
  let component: TabmesevenementsPage;
  let fixture: ComponentFixture<TabmesevenementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabmesevenementsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabmesevenementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
