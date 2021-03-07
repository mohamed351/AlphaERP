import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreMovmentReportComponent } from '../reports/store-movment-report/store-movment-report.component';
import { StoreRoutingModule} from './reports.router.module';
import { ClientAccountStatmentComponent } from './client-account-statment/client-account-statment.component';


@NgModule({
  declarations: [StoreMovmentReportComponent, ClientAccountStatmentComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,

  ]
})
export class ReportsModule { }
