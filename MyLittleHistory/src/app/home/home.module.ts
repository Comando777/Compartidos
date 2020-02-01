import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { ModalProyectoPage } from '../modal-proyecto/modal-proyecto.page';
import { ModalProyectoPageModule } from '../modal-proyecto/modal-proyecto.module';
import { ModalPersonajesPage } from '../modal-personajes/modal-personajes.page';
import { ModalPersonajesPageModule } from '../modal-personajes/modal-personajes.module';
import { ModalMundosPage } from '../modal-mundos/modal-mundos.page';
import { ModalMundosPageModule } from '../modal-mundos/modal-mundos.module';
import { ModalListPPage } from '../modal-list-p/modal-list-p.page';
import { ModalListMPage } from '../modal-list-m/modal-list-m.page';
import { ModalListMPageModule } from '../modal-list-m/modal-list-m.module';
import { ModalListPPageModule } from '../modal-list-p/modal-list-p.module';

@NgModule({
  entryComponents: [
    ModalProyectoPage,
    ModalPersonajesPage,
    ModalMundosPage,
    ModalListPPage,
    ModalListMPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ModalProyectoPageModule,
    ModalPersonajesPageModule,
    ModalMundosPageModule,
    ModalListMPageModule,
    ModalListPPageModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
