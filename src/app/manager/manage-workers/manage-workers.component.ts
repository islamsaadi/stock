import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {ManagerService} from '../../manager.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-manage-workers',
  templateUrl: './manage-workers.component.html',
  styleUrls: ['./manage-workers.component.css']
})
export class ManageWorkersComponent implements OnInit {

  public user: any = null;

  constructor(private authServ: AuthService, private managerServ: ManagerService) { 
    this.user = this.authServ.checkManager();
  }

  ngOnInit() {
  }

  addWorker(form: any){
      this.managerServ.addWorker(form).subscribe((res) => {
          if(res != null){
              swal(":)", "Worker added successfully", 'success').then(function(){
                location.reload();
              });
          }else{
            swal(":(", "Failed to add worker", 'error');
          }
      });
  }

}
