import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonajesPage } from './personajes.page';

describe('PersonajesPage', () => {
  let component: PersonajesPage;
  let fixture: ComponentFixture<PersonajesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
