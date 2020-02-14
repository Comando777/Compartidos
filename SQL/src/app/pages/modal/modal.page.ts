import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { Observable } from 'rxjs';
import { AutorInt } from 'src/app/services/database.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private db: DatabaseService,private modalCtrl: ModalController) { }

  autores: AutorInt[] = [];
  libros: Observable<any[]>;
  
  autor={};
  libro={};
  ngOnInit() {
  }
  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }
  updateAutorP(nombre,genero,img,id){
    this.db.updateAutor(nombre,genero,img,id).then(_=>{
      console.log(id);
      this.autor={};
      this.modalCtrl.dismiss();
  })
}
}
