import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddSupplymentInvoiceComponent} from './add-supplyment-invoice/add-supplyment-invoice.component';
import {ListSupplymentListComponent} from './list-supplyment-list/list-supplyment-list.component';


const routes: Routes = [
  {
    path: '',
    component: ListSupplymentListComponent,
  }
  ,
  {
      path:"create",
      component:AddSupplymentInvoiceComponent
  },
 
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
