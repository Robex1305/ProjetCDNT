import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsocialPage } from './tabsocial.page';

describe('TabsocialPage', () => {
  let component: TabsocialPage;
  let fixture: ComponentFixture<TabsocialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsocialPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
