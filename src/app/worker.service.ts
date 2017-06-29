import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {AuthService} from './auth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WorkerService {

  private urlAPI: string = "http://localhost:8000/worker";
  constructor(private http: Http,private authServ: AuthService) {

   }

   terminate(uid: number): Observable<any>{
    return this.http.get(this.urlAPI + "/terminateAccount/"+uid).map(
      (resp: Response) => resp.json()
    ).catch((error:any) => Observable.throw(error.json).error || 'Terminate failed');
  }

  verify(uid: number): Observable<any>{
    return this.http.get(this.urlAPI + "/verifyAccount/"+uid).map(
      (resp: Response) => resp.json()
    ).catch((error:any) => Observable.throw(error.json).error || 'Verify failed');
  }

  activate(uid: number): Observable<any>{
    return this.http.get(this.urlAPI + "/activateAccount/"+uid).map(
      (resp: Response) => resp.json()
    ).catch((error:any) => Observable.throw(error.json).error || 'Activate failed');
  }


  getTerminate(): Observable<any>{
    return this.http.get(this.urlAPI + "/getTerminate").map(
      (resp: Response) => resp.json()
    ).catch((error:any) => Observable.throw(error.json).error || 'Get Terminate failed');
  }

  getVerify(): Observable<any>{
    return this.http.get(this.urlAPI + "/getVerify").map(
      (resp: Response) => resp.json()
    ).catch((error:any) => Observable.throw(error.json).error || 'Get Verify failed');
  }

  getActivate(): Observable<any>{
    return this.http.get(this.urlAPI + "/getActivate").map(
      (resp: Response) => resp.json()
    ).catch((error:any) => Observable.throw(error.json).error || 'Get Activate failed');
  }

  

}
