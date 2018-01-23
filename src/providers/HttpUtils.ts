import { Injectable } from '@angular/core';
import { Http, Response ,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Utils} from "./Utils";
@Injectable()
export class HttpUtils {

  constructor(public http: Http) {
    console.log('Hello HomeService Provider');
  }
  public get(url: string, paramMap?: any): Observable<Response> {
    return this.http.get(url, new RequestOptions({
      search: HttpUtils.buildURLSearchParams(paramMap)

    }));
  }
  public static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }


}
