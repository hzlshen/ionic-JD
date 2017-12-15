import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,Tabs} from 'ionic-angular';
import {TabHomePage} from "./tab-home/tab-home";
import {TabDiscoverPage} from "./tab-discover/tab-discover";
import {TabBroadcastPage} from "./tab-broadcast/tab-broadcast";
import {TabMessagesPage} from "./tab-messages/tab-messages";
import {TabMorePage} from "./tab-more/tab-more";


@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  @ViewChild('mainTabs') tabs :Tabs;
  tab1Root:any = TabHomePage;
  tab2Root:any = TabDiscoverPage;
  tab3Root:any = TabBroadcastPage;
  tab4Root:any = TabMessagesPage;
  tab5Root:any = TabMorePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
