import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-mundos',
  templateUrl: './mundos.page.html',
  styleUrls: ['./mundos.page.scss'],
})
export class MundosPage implements OnInit {

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
