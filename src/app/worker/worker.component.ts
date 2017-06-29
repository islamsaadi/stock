import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  public user: any = null;
  constructor(private authServ: AuthService) { 
    this.user = this.authServ.checkWorker();
  }

  ngOnInit() {
  }

}
