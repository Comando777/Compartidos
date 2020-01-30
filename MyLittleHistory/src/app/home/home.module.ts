import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ComponentsModule } from '../components/components.module';
import { ModalProyectoPage } from '../modal-proyecto/modal-proyecto.page';
import { ModalProyectoPageModule } from '../modal-proyecto/modal-proyecto.module';

@NgModule({
  entryComponents: [
    ModalProyectoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ModalProyectoPageModule,
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
