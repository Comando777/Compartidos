import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalProyectoPage } from './modal-proyecto.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalProyectoPage],
})
export class ModalProyectoPageRoutingModule {}
