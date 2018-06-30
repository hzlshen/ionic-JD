// import { LookServiceProvider } from './../../../providers/look-service/look-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GOODLIST_head_URL} from "../../../providers/Constants";

/**
 * Generated class for the TabMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-messages',
  templateUrl: 'tab-messages.html',
})
export class TabMessagesPage {

  obj_ShopCartRecommendData = [];
  private errorMessage: String;
  Image_head_Url: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Image_head_Url=GOODLIST_head_URL;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabMessagesPage');
    // this.lookservice.getGoodsList().subscribe(
    //   countries => this.obj_ShopCartRecommendData = <any>countries,
    //   error => this.errorMessage = <any>error,
    //   function complete() {

    //   },
    // );
  }
}
