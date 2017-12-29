import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GoodsServiceProvider} from "../../../providers/goods-service/goods-service";


@IonicPage()
@Component({
  selector: 'page-good-list',
  templateUrl: 'good-list.html',
})
export class GoodListPage {

  index;
  obj_goodsListData=[];

  constructor(
    public goodsService:GoodsServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  goods:any;
  errorMessage:string;

  ionViewDidLoad() {

    this.index= this.navParams.get('item');
    console.log('index'+this.index);
    this.loadData();

  }

  
}
