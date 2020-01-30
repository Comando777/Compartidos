import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalProyectoPageRoutingModule } from './modal-proyecto-routing.module';

import { ModalProyectoPage } from './modal-proyecto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalProyectoPageRoutingModule
  ],
  declarations: [ModalProyectoPage]
})
export class ModalProyectoPageModule {}
