import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.page.html',
  styleUrls: ['./modal-proyecto.page.scss'],
})
export class ModalProyectoPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  @Input() nombre;
  @Input() pais;

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: 'Felipe',
      pais: 'España'
    });
  }
}
