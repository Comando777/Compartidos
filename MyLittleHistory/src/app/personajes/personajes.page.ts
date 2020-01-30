import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service'; 
 
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';

  constructor(private menuCtrl: MenuController, private postService: PostService) { }

  ngOnInit() {

    this.postService.getAlbumes()
    .subscribe( albumes => {
      console.log( albumes);
      this.albumes = albumes;
    })

  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  buscar (event) {
    /*console.log(event);*/
    this.textoBuscar = event.detail.value;
  }

}
