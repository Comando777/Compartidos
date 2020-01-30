import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPersonajesPageRoutingModule } from './modal-personajes-routing.module';

import { ModalPersonajesPage } from './modal-personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPersonajesPageRoutingModule
  ],
  declarations: [ModalPersonajesPage]
})
export class ModalPersonajesPageModule {}
