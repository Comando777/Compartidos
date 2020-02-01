import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoresPageRoutingModule } from './autores-routing.module';

import { AutoresPage } from './autores.page';
import { ModalProyectoPageModule } from 'src/app/modal-proyecto/modal-proyecto.module';
import { ModalProyectoPage } from 'src/app/modal-proyecto/modal-proyecto.page';

@NgModule({
entryComponents:[
  ModalProyectoPage
],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoresPageRoutingModule,
    ModalProyectoPageModule
  ],
  declarations: [AutoresPage]
})
export class AutoresPageModule {}
