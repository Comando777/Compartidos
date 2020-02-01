import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'autores', pathMatch: 'full' },
  {
    path: 'autores',
    loadChildren: () => import('./pages/autores/autores.module').then( m => m.AutoresPageModule)
  },
  {
    path: 'autores/:id',
    loadChildren: () => import('./pages/autores/autores.module').then( m => m.AutoresPageModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./pages/libros/libros.module').then( m => m.LibrosPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'modal-proyecto',
    loadChildren: () => import('./modal-proyecto/modal-proyecto.module').then( m => m.ModalProyectoPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
