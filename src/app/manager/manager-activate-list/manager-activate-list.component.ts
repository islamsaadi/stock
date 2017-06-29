import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {ManagerService} from '../../manager.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-manager-activate-list',
  templateUrl: './manager-activate-list.component.html',
  styleUrls: ['./manager-activate-list.component.css']
})
export class ManagerActivateListComponent implements OnInit {

  public user: any = null;
  public activatelist: any[];

  constructor(private authServ: AuthService, private managerServ: ManagerService) { 
    this.user = this.authServ.checkManager();
  }

  ngOnInit() {
    this.getActivateList();
  }

  onRefresh(){
    this.getActivateList();
  }

  getActivateList(){
    this.managerServ.getActivate().subscribe((res) => {
        this.activatelist = res;
    });
  }

  onActivate(uid: number){
    this.managerServ.activate(uid).subscribe((res)=>{
        if(res == true){
            this.getActivateList();
            swal('GOOD WORK', "Account activated", 'success')
        }else{
           swal('Oops', 'Account NOT activated', 'error');
        }
    });
  }

}
