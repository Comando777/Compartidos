import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-personajes',
  templateUrl: './modal-personajes.page.html',
  styleUrls: ['./modal-personajes.page.scss'],
})
export class ModalPersonajesPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

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
