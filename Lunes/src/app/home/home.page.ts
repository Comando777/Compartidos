import { Component } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
// import { SMS } from "@ionic-native/sms";
import { Backlight } from "@ionic-native/backlight/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  image: any;
  backlightStatus: boolean = false;
  constructor(
    private camera: Camera,
    // private sms: SMS,
    private backlight: Backlight
  ) {}

  sacarCamara() {
    //propiedades para sacar getpicture
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        console.log(err);
      }
    );
  }

  tomarGaleria() {
    //propiedasdes para llamar a getpicture
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        console.log(err);
      }
    );
  }

  // enviarsms() {
  //   this.sms.send("59165706492", "Kirov reporting");
  // }

  on() {
    this.backlight.on().then(() => {
      this.backlightStatus = true;
    });
  }

  off() {
    this.backlight.off().then(() => {
      this.backlightStatus = false;
    });
  }
}
