import { Component } from '@angular/core';
import {  Router  } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalProyectoPage } from '../modal-proyecto/modal-proyecto.page';
import { ModalPersonajesPage } from '../modal-personajes/modal-personajes.page';
import { ModalListMPage } from '../modal-list-m/modal-list-m.page';
import { ModalListPPage } from '../modal-list-p/modal-list-p.page';
import { ModalMundosPage } from '../modal-mundos/modal-mundos.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lista: Array<any> = [
    {
      titulo: "perro",
      color: "#444"
    },
    {
      titulo: "gato",
      color: "#999"
    }
  ]

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

    async abrirModal2() {

      
      const modal = await this.modalCtrl.create({
        component: ModalPersonajesPage,
        componentProps: {
          nombre : 'Fernando',
          pais: 'Costa Rica'
        }
      });
  
      await modal.present();
  
       const {data} = await modal.onDidDismiss();
    
       console.log ('Retorno del modal', data);
  
      }

      async abrirModal3() {

      
        const modal = await this.modalCtrl.create({
          component: ModalMundosPage,
          componentProps: {
            nombre : 'Fernando',
            pais: 'Costa Rica'
          }
        });
    
        await modal.present();
    
         const {data} = await modal.onDidDismiss();
      
         console.log ('Retorno del modal', data);
    
        }

        
      async abrirModal4() {

      
        const modal = await this.modalCtrl.create({
          component: ModalListMPage,
          componentProps: {
            nombre : 'Fernando',
            pais: 'Costa Rica'
          }
        });
    
        await modal.present();
    
         const {data} = await modal.onDidDismiss();
      
         console.log ('Retorno del modal', data);
    
        }

        
      async abrirModal5() {

      
        const modal = await this.modalCtrl.create({
          component: ModalListPPage,
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
