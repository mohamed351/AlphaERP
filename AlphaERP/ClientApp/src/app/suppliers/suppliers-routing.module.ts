import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListSuppliersComponent} from './list-suppliers/list-suppliers.component';
import {CreateSupplierComponent} from './create-supplier/create-supplier.component';
import {EditSupplierComponent} from './edit-supplier/edit-supplier.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';


const routes: Routes = [
  {
    path: '',
    component: ListSuppliersComponent,
  }
  ,
  {
      path:"create",
      component:CreateSupplierComponent
  },
  {
      path:"edit/:id",
      component:EditSupplierComponent
  },
  {
    path:"details/:id",
    component:SupplierDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
