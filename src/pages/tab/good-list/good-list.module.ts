import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodListPage } from './good-list';

@NgModule({
  declarations: [
    GoodListPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodListPage),
  ],
})
export class GoodListPageModule {}
