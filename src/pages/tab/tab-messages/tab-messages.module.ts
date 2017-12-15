import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabMessagesPage } from './tab-messages';

@NgModule({
  declarations: [
    TabMessagesPage,
  ],
  imports: [
    IonicPageModule.forChild(TabMessagesPage),
  ],
})
export class TabMessagesPageModule {}
