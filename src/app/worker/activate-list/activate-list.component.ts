import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {WorkerService} from '../../worker.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-activate-list',
  templateUrl: './activate-list.component.html',
  styleUrls: ['./activate-list.component.css']
})
export class ActivateListComponent implements OnInit {

  public user: any = null;
  public activatelist: any[];

  constructor(private authServ: AuthService, private workerServ: WorkerService) { 
    this.user = this.authServ.checkWorker();
  }

  ngOnInit() {
    this.getActivateList();
  }

  onRefresh(){
    this.getActivateList();
  }

  getActivateList(){
    this.workerServ.getActivate().subscribe((res) => {
        this.activatelist = res;
    });
  }

  onActivate(uid: number){
    this.workerServ.activate(uid).subscribe((res)=>{
        if(res == true){
            this.getActivateList();
            swal('GOOD WORK', "Account activated", 'success')
        }else{
           swal('Oops', 'Account NOT activated', 'error');
        }
    });
  }
}
