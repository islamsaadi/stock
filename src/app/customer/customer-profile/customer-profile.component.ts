import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import {CustomerService} from '../../customer.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  public user: any;

  constructor(private customerServ: CustomerService, private authServ: AuthService, private router: Router) { 
    this.user = this.authServ.check();
  }

  ngOnInit() {
  }

  onUpdate(form: any){
    this.customerServ.update(form).subscribe((res) => {
      this.user = res 
      swal("Awesome", "You Just Updated Your Personal Info", "success");  
    });
  }

  onTerminate(){
    this.customerServ.terminate().subscribe((res) => {
        if(res == "unauthorized"){
          swal("FAILED", "Unauthorized action", 'error');
        }else{
          swal("Done", res, "success");
        }
    });
  }

  onPay(form: any){
    this.user = this.authServ.check();
    this.customerServ.pay(form, this.user.id).subscribe((res) => {
        if(res == true){
            this.customerServ.getAccount(this.user.id).subscribe((user)=>{
              if(user != null){
                  localStorage.removeItem('user');
                  localStorage.setItem('user', JSON.stringify(user));
                  this.user = user;
              }
                
            });

            swal({
              title: 'Awesome',
              text: "Payment Accepted",
              type: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Ok!'
            }).then(function () {
              location.reload();
            })
        }else{
           swal('Sorry', "Payment Failed", "error");
        }

    });
  }

}
