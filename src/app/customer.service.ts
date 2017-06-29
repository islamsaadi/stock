import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AuthService} from './auth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerService {

  private urlAPI: string = "http://localhost:8000/customer";

  constructor(private http: Http,private authServ: AuthService) { }

  update(form: any): Observable<any>{
    return this.http.post( this.urlAPI + "/update", form).map(
      (resp: Response) => resp.json()
    ).catch((error:any) => Observable.throw(error.json).error || 'Update failed');
  }

  terminate(): Observable<any>{
    return this.http.get(this.urlAPI + "/terminateAccount?accid="+this.authServ.user.id).map(
      (resp: Response) => resp.text()
    ).catch((error: any) => Observable.throw(error.json).error || "Terminate request failed");
  }

  getStockInfo(): Observable<any>{
    return this.http.get(this.urlAPI + "/stockInfo").map(
      (resp: Response) => resp.json()
    ).catch((error: any) => Observable.throw(error.json).error || "Stock info request failed");
  }

  getPortfolioStocks(account: any): Observable<any>{
    return this.http.post(this.urlAPI + "/portfolio", account).map(
      (resp: Response) => resp.json()
    ).catch((error: any) => Observable.throw(error.json).error || "Portfolio Stocks request failed");
  }
  

  sendStockTransaction(command: any, id: number): Observable<any>{
    return this.http.post(this.urlAPI + "/stockTransaction/"+id, command).map(
      (resp: Response) => resp.json()
    ).catch((error: any) => Observable.throw(error.json).error || "Send stock transaction command request failed");
  }

  checkTransaction(uid: number): Observable<any>{
    return this.http.get(this.urlAPI + "/checkTransaction/"+uid).map(
      (resp: Response) => resp.json() 
    ).catch((error: any) => Observable.throw(error.json).error || "Check transaction request failed");
  }

  pay(form: any, uid: number): Observable<any>{
    return this.http.get("http://localhost:8000/pay/"+uid+"?amount="+form.amount+"&payment="+form.creditcard).map(
      (resp: Response) => resp.json()
    ).catch((error: any) => Observable.throw(error.json).error || "Pay request failed");
  }

  getAccount(uid: number): Observable<any>{
    return this.http.get('http://localhost:8000/getAccount/'+uid).map(
      (resp: Response) => resp.json()
    ).catch((error: any) => Observable.throw(error.json).error || "Get Account failed");
  }
}
