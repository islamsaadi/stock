import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {CustomerService} from '../../customer.service';

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent implements OnInit, AfterViewInit {

  public user: any = null;

  constructor(private authServ: AuthService, private customerServ: CustomerService) { 
    this.user = this.authServ.check();
  }

  ngAfterViewInit(){
    console.log('change view');
    this.customerServ.getAccount(this.user.id).subscribe((res) => {
      this.user = res;
    });
  }

  ngOnInit() {
  }

  logout(){
    this.authServ.logout().subscribe((res)=>{
      console.log("OUT")
    });
  }
}
