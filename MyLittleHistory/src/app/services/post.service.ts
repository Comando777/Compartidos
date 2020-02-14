import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import {Platform} from '@ionic/angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

export interface ProyectosInt {
  id: number,
  titulo: string,
  genero: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  proyectos = new BehaviorSubject([]);
  personajes = new BehaviorSubject([]);
  mundos = new BehaviorSubject([]);
  
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'proyectos.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }

  seedDatabase() {
    this.http.get('assets/mySql.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadProyectos();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
 

  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getProyectos(): Observable<ProyectosInt[]> {
    return this.proyectos.asObservable();
  }
 
  getPersonajes(): Observable<any[]> {
    return this.personajes.asObservable();
  }

  getMundos(): Observable<any[]> {
    return this.mundos.asObservable();
  }


  loadProyectos() {
    return this.database.executeSql('SELECT * FROM proyecto', []).then(data => {
      let proyectos: ProyectosInt[] = [];
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {    
            proyectos.push({ 
            id: data.rows.item(i).id,
            titulo: data.rows.item(i).titulo, 
            genero: data.rows.item(i).genero, 
            img: data.rows.item(i).img
           });
        }
      }
      this.proyectos.next(proyectos);
    });
  }

  loadPersonajes() {
    let query = 'SELECT personaje.nombre, personaje.id, proyecto.titulo AS proyecto FROM personaje JOIN personaje ON proyecto.id = personaje.proyectoId';
    return this.database.executeSql(query, []).then(data => {
      let personajes = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          personajes.push({ 
            id: data.rows.item(i).id,
            nombre: data.rows.item(i).nombre,
            edad: data.rows.item(i).edad,
            genero: data.rows.item(i).genero,
           });
        }
      }
      this.personajes.next(personajes);
    });
  }

  
  loadMundos() {
    let query = 'SELECT mundo.nombre, mundo.id, proyecto.titulo AS proyecto FROM mundo JOIN mundo ON proyecto.id = mundo.proyectoId';
    return this.database.executeSql(query, []).then(data => {
      let personajes = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          personajes.push({ 
            id: data.rows.item(i).id,
            nombre: data.rows.item(i).nombre,
            paises: data.rows.item(i).paises,
           });
        }
      }
      this.personajes.next(personajes);
    });
  }

  


  addProyectos(titulo, genero, img) {
    let data = [titulo, genero, img];
    return this.database.executeSql('INSERT INTO proyecto (titulo, genero, img) VALUES (?, ?, ?)', data).then(data => {
      this.loadProyectos();
    });
  }
  
  addPersonajes(nombre, edad, genero) {
    let data = [nombre, edad, genero];
    return this.database.executeSql('INSERT INTO proyecto (nombre, edad, genero) VALUES (?, ?, ?)', data).then(data => {
      this.loadPersonajes();
    });
  }

  getProyecto(id): Promise<ProyectosInt> {
    return this.database.executeSql('SELECT * FROM proyecto WHERE id = ?', [id]).then(data => {
     
      return {
        id: data.rows.item(0).id,
        titulo: data.rows.item(0).nombre, 
        genero: data.rows.item(0).genero,
        img: data.rows.item(0).img
      }
    });
  }



  deleteProyecto(id) {
    return this.database.executeSql('DELETE FROM proyecto WHERE id = ?', [id]).then(_ => {
      this.loadProyectos();
      this.loadPersonajes(); 
      this.loadMundos();
      
    })
    .catch (error =>{
      console.log(error);
    });
  }

  deletePersonaje(id) {
    return this.database.executeSql('DELETE FROM personaje WHERE id = ?', [id]).then(_ => {
      this.loadProyectos();
      this.loadPersonajes(); 
      this.loadMundos();
      
    })
    .catch (error =>{
      console.log(error);
    });
  }
  
  deleteMundo(id) {
    return this.database.executeSql('DELETE FROM mundo WHERE id = ?', [id]).then(_ => {
      this.loadProyectos();
      this.loadPersonajes(); 
      this.loadMundos();
      
    })
    .catch (error =>{
      console.log(error);
    });
  }

  updateProyecto(titulo, genero, img) {
    let data = [titulo, genero, img];
    return this.database.executeSql('update proyecto set titulo = ?, genero = ? where img = ?', data).then(data => {
      this.loadProyectos();

    })
  }

  updatePersonaje(nombre, edad, genero) {
    let data = [nombre, edad, genero];
    return this.database.executeSql('update personaje set nombre = ?, edad = ? where genero = ?', data).then(data => {
      this.loadPersonajes();

    })
  }

  updateMundo(nombre, paises) {
    let data = [nombre, paises];
    return this.database.executeSql('update mundo set nombre = ? where paises = ?', data).then(data => {
      this.loadMundos();

    })
  }


  obtenerPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbumes(){
    return this.http.get<any[]>('https:jsonplaceholder.typicode.com/albums');
  }
}
