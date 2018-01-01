import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class GoodsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello GoodsServiceProvider Provider');
  }

  public getGoodLists():Observable<string>{
    return this.http.get(GOODLIST_URL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response){
    let body = res.json().data;
    return body || {};
  }



}
