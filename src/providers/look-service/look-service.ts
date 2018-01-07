// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the LookServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LookServiceProvider {

  data:string;

  constructor(public http: Http) {
    console.log('Hello LookServiceProvider Provider');
  }

  public getAllcategory():Observable<string>{
    return this.http.get("assets/json/allcategory.json")
      .map(res=>res.json().content);
  }

  public getGoodsList():Observable<string>{
    return this.http.get("assets/json/look_list.json")
      .map(res=>res.json().content);
  }

  public getShopCartRecommendList():Observable<string>{
    return this.http.get("assets/json/shopcart.json")
      .map(res=>res.json().content);
  }

}
