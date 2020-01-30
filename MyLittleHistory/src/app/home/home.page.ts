import { Component } from '@angular/core';
import {  Router  } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalProyectoPage } from '../modal-proyecto/modal-proyecto.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, 
    private menuCtrl: MenuController,
    private modalCtrl: ModalController) {}

  toggleMenu() {
    this.menuCtrl.toggle();
  }

 async abrirModal() {

      
    const modal = await this.modalCtrl.create({
      component: ModalProyectoPage,
      componentProps: {
        nombre : 'Fernando',
        pais: 'Costa Rica'
      }
    });

    await modal.present();

     const {data} = await modal.onDidDismiss();
  
     console.log ('Retorno del modal', data);

    }
}
