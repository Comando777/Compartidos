import { NgModule } from '@angular/core';
import { ModalPage } from './modal.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [CommonModule,FormsModule,IonicModule],
  declarations: [ModalPage],
})
export class ModalPageRoutingModule {}
