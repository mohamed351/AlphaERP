import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreMovmentReportComponent} from './store-movment-report/store-movment-report.component';
const routes: Routes = [

  {path:'storeMovement', component:StoreMovmentReportComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
