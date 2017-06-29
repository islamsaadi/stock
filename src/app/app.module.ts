import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
 import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { WorkerComponent } from './worker/worker.component';
import { ManagerComponent } from './manager/manager.component';

import {AuthService} from './auth.service';
import {CustomerService} from './customer.service';
import { HomeComponent } from './home/home.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { CustomerNavComponent } from './customer/customer-nav/customer-nav.component';
import { CustomerMarketComponent } from './customer/customer-market/customer-market.component';
import { CustomerPortfolioComponent } from './customer/customer-portfolio/customer-portfolio.component';
import { PaymantTransactionsComponent } from './customer/paymant-transactions/paymant-transactions.component';
import { VerfiyListComponent } from './worker/verfiy-list/verfiy-list.component';
import { TerminateListComponent } from './worker/terminate-list/terminate-list.component';
import { ActivateListComponent } from './worker/activate-list/activate-list.component';
import { WorkerNavComponent } from './worker/worker-nav/worker-nav.component';
import {WorkerService} from './worker.service';
import { ManagerNavComponent } from './manager/manager-nav/manager-nav.component';
import { ManageWorkersComponent } from './manager/manage-workers/manage-workers.component';
import { CompanyReportComponent } from './manager/company-report/company-report.component';
import { ManagerActivateListComponent } from './manager/manager-activate-list/manager-activate-list.component';
import { ManagerVerifyListComponent } from './manager/manager-verify-list/manager-verify-list.component';
import { ManagerTerminateListComponent } from './manager/manager-terminate-list/manager-terminate-list.component';
import {ManagerService} from './manager.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    WorkerComponent,
    ManagerComponent,
    HomeComponent,
    CustomerProfileComponent,
    CustomerNavComponent,
    CustomerMarketComponent,
    CustomerPortfolioComponent,
    PaymantTransactionsComponent,
    VerfiyListComponent,
    TerminateListComponent,
    ActivateListComponent,
    WorkerNavComponent,
    ManagerNavComponent,
    ManageWorkersComponent,
    CompanyReportComponent,
    ManagerActivateListComponent,
    ManagerVerifyListComponent,
    ManagerTerminateListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: "customer",
        component: CustomerComponent
      },
      {
        path: "manager",
        component: ManagerComponent
      },
      {
        path: "worker",
        component: WorkerComponent
      },
      {
        path: "customer/profile",
        component: CustomerProfileComponent
      },
      {
        path: "customer/market",
        component: CustomerMarketComponent
      },
      {
        path: "customer/portfolio",
        component: CustomerPortfolioComponent
      },
      {
        path: "customer/payments",
        component: PaymantTransactionsComponent
      },
      {
        path: "worker/verify",
        component: VerfiyListComponent
      },
      {
        path: "worker/activate",
        component: ActivateListComponent
      },
      {
        path: "worker/terminate",
        component: TerminateListComponent
      },
      {
        path: "manager/verify",
        component: ManagerVerifyListComponent
      },
      {
        path: "manager/activate",
        component: ManagerActivateListComponent
      },
      {
        path: "manager/terminate",
        component: ManagerTerminateListComponent
      },
      {
        path: "manager/manageworkers",
        component: ManageWorkersComponent
      },
      {
        path: "manager/report",
        component: CompanyReportComponent
      }
      
      
      
    ])
  ],
  providers: [AuthService, CustomerService, WorkerService, ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
