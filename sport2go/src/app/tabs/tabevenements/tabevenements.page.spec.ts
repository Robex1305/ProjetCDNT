import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabevenementsPage } from './tabevenements.page';

describe('TabevenementsPage', () => {
  let component: TabevenementsPage;
  let fixture: ComponentFixture<TabevenementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabevenementsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabevenementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
