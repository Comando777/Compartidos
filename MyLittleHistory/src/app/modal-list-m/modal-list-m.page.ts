import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-list-m',
  templateUrl: './modal-list-m.page.html',
  styleUrls: ['./modal-list-m.page.scss'],
})
export class ModalListMPage implements OnInit {

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
