import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AutorInt } from 'src/app/services/database.service';
import { DatabaseService } from './../../services/database.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {

  autores: AutorInt[] = [];
 
  libros: Observable<any[]>;
 
  autor = {};
  libro = {};
 
  selectedView = 'autors';

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getAutores().subscribe(autors => {
          console.log('iniciando la bd ' , autors)
          this.autores = autors;
        })
         this.libros = this.db.getLibros();
        }
        
    });
  }



  addAutorP() {
      this.db.addAutor(this.autor['nombre'], this.autor['genero'], this.autor['img'])
    .then(_ => {
      this.autor = {};
    });
  }
 
  addLibroP() {
    this.db.addLibro(this.libro['titulo'], this.libro['autorId'])
    .then(_ => {
      this.libro= {};
      console.log("Libro añadido");
    });
  }

  deleteAutorP(id) {
    return this.db.deleteAutor(id)
    .then(_ => {
      
    })
    .catch (error =>{
      console.log(error);
    });
  }

  deleteLibroP(id) {
    return this.db.deleteLibro(id)
    .then(_ => {
      
    })
    .catch (error =>{
      console.log(error);
    });
  }

  updateAutorP() {
    this.db.updateAutor(this.autorx['nombre'], this.autorx['genero'], this.autorx['img'])
  .then(_ => {
    this.autor = {};
  });
}

}
