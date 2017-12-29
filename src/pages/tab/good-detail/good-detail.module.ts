import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodDetailPage } from './good-detail';

@NgModule({
  declarations: [
    GoodDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodDetailPage),
  ],
})
export class GoodDetailPageModule {}
