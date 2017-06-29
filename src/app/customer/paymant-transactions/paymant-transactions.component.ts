import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {CustomerService} from '../../customer.service';

@Component({
  selector: 'app-paymant-transactions',
  templateUrl: './paymant-transactions.component.html',
  styleUrls: ['./paymant-transactions.component.css']
})
export class PaymantTransactionsComponent implements OnInit {

  public payments: any[];
  public user: any = null;

  constructor(private authServ: AuthService, private customerServ: CustomerService) { 
    this.user = this.authServ.check();
  }

  ngOnInit() {
  }

  onRefresh(){
    this.customerServ.getAccount(this.user.id).subscribe((user)=>{
      if(user != null){
          localStorage.removeItem('user');
          localStorage.setItem('user', JSON.stringify(user));
          this.user = user;
      }
        
    });
  }

}
