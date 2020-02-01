import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-list-p',
  templateUrl: './modal-list-p.page.html',
  styleUrls: ['./modal-list-p.page.scss'],
})
export class ModalListPPage implements OnInit {

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
