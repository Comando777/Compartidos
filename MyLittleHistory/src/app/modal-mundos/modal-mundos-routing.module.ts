import { NgModule } from '@angular/core';
import { ModalMundosPage } from './modal-mundos.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalMundosPage],
})
export class ModalMundosPageRoutingModule {}
