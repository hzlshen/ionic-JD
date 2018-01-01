import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GoodsServiceProvider} from "../../../providers/goods-service/goods-service";
import {GoodDetailPage} from "../good-detail/good-detail";


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

  private loadNetData(refresher: any) {
    this.goodsService.getGoodLists().subscribe(
      countries => this.obj_goodsListData = <any>countries,
      error => this.errorMessage = <any>error,
      function complete() {
        refresher.complete();
      },
    );
  }

  private loadData(){
    this.goodsService.getGoodLists().subscribe(
      countries=>this.obj_goodsListData=<any>countries,
      error=>this.errorMessage=<any>error,
    );
  }

  doInfinite(infiniteScroll){
    console.log("新年好！");
    setTimeout(()=>{
      infiniteScroll.complete();
    },500);
  }

  doRefresh(refresher){
    this.loadNetData(refresher);
  }

  goBack() {
    this.navCtrl.pop();
  }
  startPage(index: number) {
    this.navCtrl.push(GoodDetailPage, {
      item: index
    });
  }
}
