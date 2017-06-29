import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  public user: any = null;

  constructor(private http: Http, private router: Router) { }

  login(form:any): Observable<any>{
      let data = new URLSearchParams();
      data.append('userName', form.username);
      data.append('password', form.password);

      return  this.http.post("http://localhost:8000/login", data).map(
        (res: Response) => { 
          this.user = res.text() ? res.json() : null
          return this.user
        }
      ).catch((error:any) => Observable.throw(error.json).error || 'Login failed');
  }

  check(){
    this.user = (this.user != null) ? this.user : JSON.parse(localStorage.getItem('user'));
    if(this.user == null || this.user.type != "CUSTOMER")
        this.router.navigateByUrl('/');
    return this.user;
  }


  checkWorker(){
    this.user = (this.user != null) ? this.user : JSON.parse(localStorage.getItem('user'));
    if(this.user == null || this.user.type != "WORKER")
        this.router.navigateByUrl('/');
    return this.user;
  }

  checkManager(){
    this.user = (this.user != null) ? this.user : JSON.parse(localStorage.getItem('user'));
    if(this.user == null || this.user.type != "MANAGER")
        this.router.navigateByUrl('/');
    return this.user;
  }

  logout(): Observable<any>{
    return this.http.get("http://localhost:8000/logout").map(
      (res: Response) => {
          localStorage.removeItem('user');
          localStorage.removeItem('userType');
          localStorage.removeItem('userId');
          this.router.navigateByUrl('/');
      }
    ).catch((error:any) => Observable.throw(error.json).error || 'Logout failed');
  }
  register(form:any): Observable<any>{
      return  this.http.post("http://localhost:8000/customer/register", form).map(
        (res: Response) => res.json()
      ).catch((error:any) => Observable.throw(error.json).error || 'Register failed');
  }

  getAccount(): Observable<any>{
    return this.http.get("http://localhost:8000/getAccount").map(
      (resp: Response) =>{ 
          this.user = resp.text() ? resp.json() : null
          return this.user
      }
    ).catch((error:any) => Observable.throw(error.json).error || 'Get Account failed');
  }

  regAdmin(): Observable<any>{
    return this.http.get("http://localhost:8000/manager/regAd").map(
      (resp: Response) => resp.json()
    ).catch((error:any) => Observable.throw(error.json).error || 'RegAd failed');
  }

}
