import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {ManagerService} from '../../manager.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-manager-verify-list',
  templateUrl: './manager-verify-list.component.html',
  styleUrls: ['./manager-verify-list.component.css']
})
export class ManagerVerifyListComponent implements OnInit {

  public user: any = null;
  public verifylist: any[];

  constructor(private authServ: AuthService, private managerServ: ManagerService) { 
    this.user = this.authServ.checkManager();
  }

  ngOnInit() {
    this.getVerifyList();
  }

  onRefresh(){
    this.getVerifyList();
  }

  getVerifyList(){
    this.managerServ.getVerify().subscribe((res) => {
        this.verifylist = res;
    });
  }

  onVerify(uid: number){
    this.managerServ.verify(uid).subscribe((res)=>{
        if(res == true){
            this.getVerifyList();
            swal('GOOD WORK', "Account verified", 'success')
        }else{
           swal('Oops', 'Account NOT verified', 'error');
        }
    });
  }
}
