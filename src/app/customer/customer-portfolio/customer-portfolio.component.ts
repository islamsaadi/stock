import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {CustomerService} from '../../customer.service';
import swal from "sweetalert2";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-customer-portfolio',
  templateUrl: './customer-portfolio.component.html',
  styleUrls: ['./customer-portfolio.component.css']
})
export class CustomerPortfolioComponent implements OnInit {
  public user: any = null;
  public stocks: any[];
  public stockCodeForAsk: string;
  public command: string = "ASK";
  public strowid: number;

  constructor(private customerServ: CustomerService, private authServ: AuthService, private router: Router) { 
    this.user = this.authServ.check();

    let timer = Observable.timer(1,60000);
    timer.subscribe(()=>{
         this.customerServ.checkTransaction(this.user.id).subscribe((res)=>{
            console.log(res);
          });
        this.onRefresh()
      }
    );

  }

  ngOnInit() {
    this.customerServ.getPortfolioStocks(this.user).subscribe((res)=>{
      this.stocks = res;
    });
  }

  openModal(code: string, id: number){
    this.stockCodeForAsk = code;
    this.strowid = id;
    $('#myModal').modal('show');
  }

  onRefresh(){
    this.customerServ.checkTransaction(this.user.id).subscribe((res)=>{
      console.log(res);
    });
    this.customerServ.getPortfolioStocks(this.user).subscribe((res)=>{
      this.stocks = res;
    });
  }

  onAsk(form: any){
    this.customerServ.sendStockTransaction(form, form.strowid).subscribe((res)=>{
        if(res == true)
          swal("Congratulations", "You just make an ASK ", "success");
        else
          swal("Sorry", "Failed to accept your ASK try again later ", "error");
          
    });
  }

  

}
