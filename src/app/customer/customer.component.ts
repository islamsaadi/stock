import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public user: any;

  constructor(private authServ: AuthService, private router: Router) { 
    this.user = this.authServ.check();
  }

  ngOnInit() {
  }

}
