import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabPage} from "../pages/tab/tab";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabPage;
  platform:any = Platform;
  toast: any = ToastController;
  backButtonPressed:boolean = false;  //判断返回键是否触发
  @ViewChild(Nav) nav :Nav;

  constructor(platform: Platform, statusBar: StatusBar, toast:ToastController, splashScreen: SplashScreen) {
    this.platform =platform;
    this.toast = toast;
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
