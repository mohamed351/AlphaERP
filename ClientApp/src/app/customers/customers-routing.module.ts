import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomersComponent} from './list-customers/list-customers.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';


const routes: Routes = [
  {
    path: '',
    component: ListCustomersComponent,
  }
  ,
  {
      path:"create",
      component:CreateCustomerComponent
  },
  {
      path:"edit/:id",
      component:EditCustomerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
