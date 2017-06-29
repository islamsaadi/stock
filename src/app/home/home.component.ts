import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import swal from 'sweetalert2';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: any;

  constructor(private authServ: AuthService, private router: Router){
  }

  ngOnInit() {
  }

  onLogin(form: any){
    this.authServ.login(form).subscribe((res) => {
      
      if(res != null){
        this.user = res;
        localStorage.setItem("userType",  JSON.stringify(res.type));
        localStorage.setItem("userId",  JSON.stringify(res.id));
        localStorage.setItem('user',  JSON.stringify(res));
          if(res.type == "CUSTOMER")
            this.router.navigateByUrl('customer');
          else if(res.type == "MANAGER")
              this.router.navigateByUrl('manager');
          else if(res.type == "WORKER")
              this.router.navigateByUrl('worker');
      }else{
        swal("Failed", "Try again later", 'error');
      }
    });
  }

  onRegister(form: any){
    this.authServ.register(form).subscribe((res) => {
      $('#myModal').modal('hide');
      if(res == true){
        swal("Success", "We will let you know when we verify your account", "success");
      }else{
        swal("Failed", "Try again later", 'error');
      }
    });
  }

}
