import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Swiper from 'swiper';


@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {
  
  @ViewChild('lyScroll')
  lyScrollDiv:ElementRef;
  @ViewChild('headBgColor')
  greetBgDiv:ElementRef;
  @ViewChild('btnBackTop')
  bBackTop:ElementRef;
  
  oSwiper1:any = null;
  
  public headerSlideData =[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public el:ElementRef) {
  }
  
  ionViewDidLoad() {
    // this.initHeaderSlide();
    // this.headerSlideData = this.getHeaderSlideData();
    // this.headerChangeColor();
    // this.goTop();
    // this.initToutiaoSlide();
    // this.countdown();
  }
  
  private countdown(){
    let timer;
    if (timer)
      clearInterval(timer);
      //倒计时
      var timeObj = {
        h:1,
        m:33,
        s:9
      };
      var timeStr = toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
      var timeList = document.getElementsByClassName('time-text');
      for(var i = 0;i<timeList.length;i++){
        timeList[i].innerHTML=timeStr[i];
      }
      
      function toDouble(num){
        if(num<10){
          return '0'+num;
        }else {
          return ''+num;
        }
      }
      
      timer = setInterval(function () {
        timeObj.s--;
        if(timeObj.s==-1){
          timeObj.m--;
          timeObj.s =59;
        }
        if(timeObj.m==-1){
          timeObj.h--;
          timeObj.m=59;
        }
        if(timeObj.h==-1){
          timeObj.h=0;
          timeObj.m=0;
          timeObj.s=0;
          clearInterval(timer);
        }
  
        timeStr=toDouble(timeObj.h)+toDouble(timeObj.m)+toDouble(timeObj.s);
        for (var i = 0;i<timeList.length;i++){
          timeList[i].innerHTML = timeStr[i];
        }
      },1000)
  }
  
  private goTop(){
    let lyBg = this.lyScrollDiv.nativeElement;
    let btTop = this.bBackTop.nativeElement;
    
    lyBg.addEventListener('scroll',function () {
      var top = btTop.scrollTop;
      if(top>500){
        console.dir("老王");
        btTop.style.opacity = 1;
      }else{
        console.dir("老王");
        btTop.style.opacity = 0;
      }
    },false)
    
    btTop.onclick =function () {
      lyBg.scrollTop =0;
    }
  }
  
  private headerChangeColor(){
    let headdiv = this.lyScrollDiv.nativeElement;
    var nowOpacity = 0;
    let lHeadBgdiv = this.greetBgDiv.nativeElement;
    headdiv.onscroll=function (event) {
      if (this.scrollTop/250<.85){
        nowOpacity = this.scrollTop/250;
      }
      lHeadBgdiv.style.opacity =nowOpacity;
    }
  }
  
  // 初始化京东滚动条
  private initToutiaoSlide(){
    new Swiper('#toutiaoSlide',{
      direction:'vertical',
      autoplay:2000,
      loop:true
    });
  }

}
