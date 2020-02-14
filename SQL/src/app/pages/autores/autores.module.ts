import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoresPageRoutingModule } from './autores-routing.module';

import { AutoresPage } from './autores.page';
import { ModalPage } from '../modal/modal.page';
import { ModalPageModule } from '../modal/modal.module';

@NgModule({
  entryComponents:[ModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoresPageRoutingModule,
    ModalPageModule
  ],
  declarations: [AutoresPage]
})
export class AutoresPageModule {}
