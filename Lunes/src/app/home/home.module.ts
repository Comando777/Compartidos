import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
// import { SMS } from "@ionic-native/sms";
import { Backlight } from "@ionic-native/backlight/ngx";
import { Camera } from "@ionic-native/camera/ngx";
import { HomePage } from "./home.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  providers: [
    //SMS,
    Backlight,
    Camera
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
