import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.page.html',
  styleUrls: ['./modal-proyecto.page.scss'],
})
export class ModalProyectoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

}
