import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalMundosPageRoutingModule } from './modal-mundos-routing.module';

import { ModalMundosPage } from './modal-mundos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalMundosPageRoutingModule
  ],
  declarations: [ModalMundosPage]
})
export class ModalMundosPageModule {}
