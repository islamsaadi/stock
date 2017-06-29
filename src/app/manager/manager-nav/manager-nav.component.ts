import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-manager-nav',
  templateUrl: './manager-nav.component.html',
  styleUrls: ['./manager-nav.component.css']
})
export class ManagerNavComponent implements OnInit {

  public user: any = null;
  constructor(private authServ: AuthService) { 
    this.user = this.authServ.checkManager();
  }

  ngOnInit() {
  }

  logout(){
    this.authServ.logout().subscribe((res)=>{
      console.log("OUT")
    });
  }

}
