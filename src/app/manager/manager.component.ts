import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  public user: any = null;
  constructor(private authServ: AuthService) { 
    this.user = this.authServ.checkManager();
  }

  ngOnInit() {
  }

}
