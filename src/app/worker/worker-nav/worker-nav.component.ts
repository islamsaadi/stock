import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-worker-nav',
  templateUrl: './worker-nav.component.html',
  styleUrls: ['./worker-nav.component.css']
})
export class WorkerNavComponent implements OnInit {

  public user: any = null;
  constructor(private authServ: AuthService) { 
    this.user = this.authServ.checkWorker();
  }

  ngOnInit() {
  }

  logout(){
    this.authServ.logout().subscribe((res)=>{
      console.log("OUT")
    });
  }
}
