import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPersonajesPage } from './modal-personajes.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPersonajesPageRoutingModule {}
