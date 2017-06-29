import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {WorkerService} from '../../worker.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-terminate-list',
  templateUrl: './terminate-list.component.html',
  styleUrls: ['./terminate-list.component.css']
})
export class TerminateListComponent implements OnInit {

  public user: any = null;
  public terminatelist: any[];

  constructor(private authServ: AuthService, private workerServ: WorkerService) { 
    this.user = this.authServ.checkWorker();
  }

  ngOnInit() {
    this.getTerminateList();
    console.log(this.terminatelist);
  }

  onRefresh(){
    this.getTerminateList();
  }

  getTerminateList(){
    this.workerServ.getTerminate().subscribe((res) => {
        this.terminatelist = res;
    });
  }

  onTerminate(uid: number){
    this.workerServ.terminate(uid).subscribe((res)=>{
        if(res == true){
            this.getTerminateList();
            swal('GOOD WORK', "Account terminated", 'success')
        }else{
           swal('Oops', 'Account NOT terminated, Account Balance must be 0', 'error');
        }
    });
  }

}
