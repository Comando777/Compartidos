import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MundosPage } from './mundos.page';

describe('MundosPage', () => {
  let component: MundosPage;
  let fixture: ComponentFixture<MundosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MundosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
