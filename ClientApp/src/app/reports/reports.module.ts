import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreMovmentReportComponent } from '../reports/store-movment-report/store-movment-report.component';
import { StoreRoutingModule} from './reports.router.module';


@NgModule({
  declarations: [StoreMovmentReportComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,

  ]
})
export class ReportsModule { }
