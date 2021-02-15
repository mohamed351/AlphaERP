import { AllRefundedSupplymentInvoiceComponent} from './all-refunded-supplyment-invoice/all-refunded-supplyment-invoice.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddSupplymentInvoiceComponent} from './add-supplyment-invoice/add-supplyment-invoice.component';
import {ListSupplymentListComponent} from './list-supplyment-list/list-supplyment-list.component';
import { SupplymentInvoiceDetailsComponent } from './supplyment-invoice-details/supplyment-invoice-details.component';
import { SupplierRefundComponent} from './supplier-refund/supplier-refund.component';
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
    path: "details/:id",
    component:SupplymentInvoiceDetailsComponent
  },
  {
    path: "refund/:id",
    component:SupplierRefundComponent
  },
  {
    path: "purchasingRefundList/:id",
    component:AllRefundedSupplymentInvoiceComponent
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
