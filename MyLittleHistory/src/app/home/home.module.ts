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

@NgModule({
  entryComponents: [
    ModalProyectoPage,
    ModalPersonajesPage,
    ModalMundosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ModalProyectoPageModule,
    ModalPersonajesPageModule,
    ModalMundosPageModule,
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
