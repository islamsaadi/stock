import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {WorkerService} from '../../worker.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-verfiy-list',
  templateUrl: './verfiy-list.component.html',
  styleUrls: ['./verfiy-list.component.css']
})
export class VerfiyListComponent implements OnInit {
  public user: any = null;
  public verifylist: any[];

  constructor(private authServ: AuthService, private workerServ: WorkerService) { 
    this.user = this.authServ.checkWorker();
  }

  ngOnInit() {
    this.getVerifyList();
  }

  onRefresh(){
    this.getVerifyList();
  }

  getVerifyList(){
    this.workerServ.getVerify().subscribe((res) => {
        this.verifylist = res;
    });
  }

  onVerify(uid: number){
    this.workerServ.verify(uid).subscribe((res)=>{
        if(res == true){
            this.getVerifyList();
            swal('GOOD WORK', "Account verified", 'success')
        }else{
           swal('Oops', 'Account NOT verified', 'error');
        }
    });
  }

}
