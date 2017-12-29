import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-good-list',
  templateUrl: 'good-list.html',
})
export class GoodListPage {
  
  index;
  obj_goodsListData=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodListPage');
  }

}
