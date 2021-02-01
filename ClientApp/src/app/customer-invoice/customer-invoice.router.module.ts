import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCustomerInvoiceComponent } from './create-customer-invoice/create-customer-invoice.component';
import { ListCustomerInvoiceComponent} from './list-customer-invoice/list-customer-invoice.component';


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


];
//routes
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
