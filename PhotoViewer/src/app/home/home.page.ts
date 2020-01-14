import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { PhotoViewer, PhotoViewerOptions } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCTRL: NavController, private photoviewer: PhotoViewer) {
 
   }
   viewimage (url:string){
     const option:PhotoViewerOptions ={
        share:true
      } 
      this.photoviewer.show(url,"Titulo de prueba", option)
    }
  
}
