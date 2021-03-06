import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabPage} from "../pages/tab/tab";
import {TabHomePage} from "../pages/tab/tab-home/tab-home";
import {TabMessagesPage} from "../pages/tab/tab-messages/tab-messages";
import {TabDiscoverPage} from "../pages/tab/tab-discover/tab-discover";
import {TabMorePage} from "../pages/tab/tab-more/tab-more";
import {TabBroadcastPage} from "../pages/tab/tab-broadcast/tab-broadcast";
import { GoodsServiceProvider } from '../providers/goods-service/goods-service';
import { LookServiceProvider } from '../providers/look-service/look-service';
import {HttpModule} from "@angular/http";
// import {LazyLoadImageModule} from "ng-lazyload-image";
import { RegisterPage } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    TabPage,
    TabHomePage,
    TabMessagesPage,
    TabDiscoverPage,
    TabMorePage,
    TabBroadcastPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    // LazyLoadImageModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabPage,
    TabHomePage,
    TabMessagesPage,
    TabDiscoverPage,
    TabMorePage,
    TabBroadcastPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoodsServiceProvider,
    LookServiceProvider,
  ]
})
export class AppModule {}
