import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabEvenementsPage } from './tabEvenements.page';

describe('TabEvenementsPage', () => {
  let component: TabEvenementsPage;
  let fixture: ComponentFixture<TabEvenementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabEvenementsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabEvenementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
