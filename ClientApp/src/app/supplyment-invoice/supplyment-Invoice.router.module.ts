import { SupplierRefundComponent } from './supplier-refund/supplier-refund.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddSupplymentInvoiceComponent} from './add-supplyment-invoice/add-supplyment-invoice.component';
import {ListSupplymentListComponent} from './list-supplyment-list/list-supplyment-list.component';
import { SupplymentInvoiceDetailsComponent} from './supplyment-invoice-details/supplyment-invoice-details.component';

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
  {
    path: "refund/:id",
    component:SupplierRefundComponent
  },
  {
    path: "details/:id",
    component:SupplymentInvoiceDetailsComponent
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
