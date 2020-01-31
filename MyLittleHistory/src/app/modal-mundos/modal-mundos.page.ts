import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-mundos',
  templateUrl: './modal-mundos.page.html',
  styleUrls: ['./modal-mundos.page.scss'],
})
export class ModalMundosPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

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
