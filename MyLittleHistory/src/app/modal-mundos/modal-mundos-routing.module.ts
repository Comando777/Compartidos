import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMundosPage } from './modal-mundos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMundosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMundosPageRoutingModule {}
