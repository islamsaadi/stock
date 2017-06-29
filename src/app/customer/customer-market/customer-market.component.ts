import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import {CustomerService} from '../../customer.service';
import {Observable} from 'rxjs/Rx';
import swal from "sweetalert2";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-customer-market',
  templateUrl: './customer-market.component.html',
  styleUrls: ['./customer-market.component.css']
})
export class CustomerMarketComponent implements OnInit {
  public user: any;
  public stocks: any[];
  public stockCodeForBid: string;
  public typeBid: string = "BID";


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
    this.customerServ.getStockInfo().subscribe((res)=>{
      this.stocks = res;
    });
  }

  openModal(code: string){
    this.stockCodeForBid = code;
    $('#myModal').modal('show');
  }

  onRefresh(){
    this.customerServ.getStockInfo().subscribe((res)=>{
      this.stocks = res;
    });
  }

  onBid(form: any){
    this.customerServ.sendStockTransaction(form, 0).subscribe((res) => {
        if(res == true)
          swal("Congratulations", "You just make a BID :) ", "success");
        else
          swal("Sorry", "Failed to accept your BID, Check your balance ", "error");

    });
  }

}
