import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomersComponent} from './list-customers/list-customers.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';


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
  },
  {
    path:"details/:id",
    component:DetailsCustomerComponent
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
