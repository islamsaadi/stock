import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private router: Router, private authServ: AuthService){
    this.authServ.regAdmin().subscribe((res)=>{
        console.log("AD" + res);
    });
  }
}
