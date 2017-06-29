import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {ManagerService} from '../../manager.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-manager-terminate-list',
  templateUrl: './manager-terminate-list.component.html',
  styleUrls: ['./manager-terminate-list.component.css']
})
export class ManagerTerminateListComponent implements OnInit {

   public user: any = null;
  public terminatelist: any[];

  constructor(private authServ: AuthService, private managerServ: ManagerService) { 
    this.user = this.authServ.checkManager();
  }

  ngOnInit() {
    this.getTerminateList();
  }

  onRefresh(){
    this.getTerminateList();
  }

  getTerminateList(){
    this.managerServ.getTerminate().subscribe((res) => {
        this.terminatelist = res;
    });
  }

  onTerminate(uid: number){
    this.managerServ.terminate(uid).subscribe((res)=>{
        if(res == true){
            this.getTerminateList();
            swal('GOOD WORK', "Account terminated", 'success')
        }else{
           swal('Oops', 'Account NOT terminated, Account Balance must be 0', 'error');
        }
    });
  }

}
