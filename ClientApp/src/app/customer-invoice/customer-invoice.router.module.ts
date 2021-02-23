import { CustomerRefundCompoentComponent } from './customer-refund-compoent/customer-refund-compoent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCustomerInvoiceComponent } from './create-customer-invoice/create-customer-invoice.component';
import { ListCustomerInvoiceComponent} from './list-customer-invoice/list-customer-invoice.component';
import {CustomerInvoiceDetailsComponent } from './customer-invoice-details/customer-invoice-details.component';

const routes: Routes = [
  {
    path: '',
    component:ListCustomerInvoiceComponent ,
  }
  ,
  {
      path:"create",
      component:CreateCustomerInvoiceComponent
  }
  ,
  {
    path: "details/:id",
    component:CustomerInvoiceDetailsComponent
  },
  {
    path:"refund/:id",
    component:CustomerRefundCompoentComponent
  }


];
//routes
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
