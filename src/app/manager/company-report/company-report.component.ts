import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {ManagerService} from '../../manager.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-company-report',
  templateUrl: './company-report.component.html',
  styleUrls: ['./company-report.component.css']
})
export class CompanyReportComponent implements OnInit {

   public user: any = null;
   public reports: any;

  constructor(private authServ: AuthService, private managerServ: ManagerService) { 
    this.user = this.authServ.checkManager();
  }

  ngOnInit() {
    this.managerServ.companyReport().subscribe((res) => {
        this.reports = res;
        console.log(res);
    });
  }

}
