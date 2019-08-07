import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabmessagesPage } from './tabmessages.page';

describe('TabmessagesPage', () => {
  let component: TabmessagesPage;
  let fixture: ComponentFixture<TabmessagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabmessagesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabmessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
