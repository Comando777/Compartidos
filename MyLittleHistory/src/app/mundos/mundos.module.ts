import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MundosPageRoutingModule } from './mundos-routing.module';

import { MundosPage } from './mundos.page';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MundosPageRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  declarations: [MundosPage]
})
export class MundosPageModule {}
